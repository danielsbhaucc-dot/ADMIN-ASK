import { buildConfig, type CollectionConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { parse as parsePgConnectionString } from 'pg-connection-string'
import path from 'path'
import { fileURLToPath } from 'url'

// ייבוא הקולקשן החדש למנהלים
import { Users } from './collections/Users'
import * as migrationPayloadAdminTables from './migrations/20260416_000000_payload_admin_tables'
import * as migrationPayloadPreferences from './migrations/20260416_000001_payload_preferences'

// ייבוא הקולקשנים הקיימים
import { Profiles } from './collections/Profiles'
import { Questions } from './collections/Questions'
import { Answers } from './collections/Answers'
import { AdminReports } from './collections/AdminReports'
import { ContentPenalties } from './collections/ContentPenalties'
import { ModerationAppeals } from './collections/ModerationAppeals'
import { ModerationActionLogs } from './collections/ModerationActionLogs'
import { SoftDeletedContent } from './collections/SoftDeletedContent'
import { DeletedContentRecoveryRequests } from './collections/DeletedContentRecoveryRequests'
import { ViolationRules } from './collections/ViolationRules'
import { ContentEditHistory } from './collections/ContentEditHistory'
import { RoleAssignmentHistory } from './collections/RoleAssignmentHistory'
import { TrustScoreAudit } from './collections/TrustScoreAudit'
import { UserTrustScore } from './collections/UserTrustScore'
import { Conversations } from './collections/Conversations'
import { ConversationParticipants } from './collections/ConversationParticipants'
import { Messages } from './collections/Messages'
import { StaffNotes } from './collections/StaffNotes'
import { UserFollows } from './collections/UserFollows'
import { ProfileViews } from './collections/ProfileViews'
import { ScoutsGuideDocument } from './collections/ScoutsGuideDocument'
import { ModerationFilterPresets } from './collections/ModerationFilterPresets'
import { ConversationTyping } from './collections/ConversationTyping'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

/** בלי נעילת מסמכים — אחרת Payload יוצר payload_locked_documents* עם עשרות FK לכל קולקשן; בלי מיגרציה מלאה הטבלאות חסרות. */
function withoutDocLocks<T extends CollectionConfig>(c: T): T {
  return { ...c, lockDocuments: false }
}

function stripInvisible(s: string): string {
  return s.replace(/[\u200B-\u200D\uFEFF]/g, '')
}

function normalizeDatabaseUrl(raw: string): string {
  let s = stripInvisible(raw).trim().replace(/^\uFEFF/, '')
  const lineKey =
    /^(?:DATABASE_URL|POSTGRES_URL|POSTGRES_PRISMA_URL|SUPABASE_DB_URL)\s*=\s*(.+)$/im
  const lineMatch = s.match(lineKey)
  if (lineMatch) {
    s = lineMatch[1].trim()
  }
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim()
  }
  return s
}

const vercelEnvHint =
  process.env.VERCEL === '1'
    ? ' On Vercel: add the variable for the same environment you deploy (Production / Preview), save, then Redeploy (Clear build cache if the value changed).'
    : ''

function resolveDatabaseUrlRaw(): string {
  const keys = [
    'DATABASE_URL',
    'POSTGRES_URL',
    'POSTGRES_PRISMA_URL',
    'SUPABASE_DB_URL',
  ] as const
  for (const key of keys) {
    const v = process.env[key]
    if (v !== undefined && String(v).trim() !== '') {
      return String(v)
    }
  }
  throw new Error(
    `Missing database connection string. Set DATABASE_URL (or POSTGRES_URL, etc.) — Supabase: Database → Connection string → URI.${vercelEnvHint}`,
  )
}

const databaseURLRaw = resolveDatabaseUrlRaw()
const payloadSecret = process.env.PAYLOAD_SECRET

const databaseURL = normalizeDatabaseUrl(databaseURLRaw)

if (!/^postgres(ql)?:\/\//i.test(databaseURL)) {
  const head = databaseURL.slice(0, 24).replace(/[^\x20-\x7E]/g, '?')
  throw new Error(
    `DATABASE_URL must start with postgres:// or postgresql:// (got "${head}…"). In Vercel: one line, no key name prefix, no quotes. Copy URI only from Supabase.`,
  )
}

let parsed: ReturnType<typeof parsePgConnectionString>
try {
  parsed = parsePgConnectionString(databaseURL)
} catch {
  throw new Error(
    `DATABASE_URL is not a valid Postgres URI. Use one line, no surrounding quotes, no "KEY=" inside the value; encode special characters in the password (encodeURIComponent).${vercelEnvHint}`,
  )
}

const databaseHost = parsed.host

if (!databaseHost || databaseHost === 'base') {
  throw new Error(
    'DATABASE_URL hostname is missing or invalid (often a truncated env value or an unencoded @ in the password). Re-copy the full URI from Supabase into Vercel.',
  )
}

if (databaseHost !== 'localhost' && !databaseHost.includes('.')) {
  throw new Error(
    'DATABASE_URL hostname looks invalid. Expected a host like *.supabase.com or localhost.',
  )
}

if (!payloadSecret) {
  throw new Error(
    `Missing PAYLOAD_SECRET environment variable.${vercelEnvHint}`,
  )
}

/** Vercel/Lambda often hit SELF_SIGNED_CERT_IN_CHAIN with Supabase; lenient SSL keeps TLS but skips CA verify. Set DATABASE_SSL_REJECT_UNAUTHORIZED=true to enforce verification. */
function poolSslForHost(host: string):
  | { rejectUnauthorized: boolean }
  | undefined {
  if (host === 'localhost' || host === '127.0.0.1') {
    return undefined
  }
  if (process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === 'true') {
    return undefined
  }
  if (process.env.DATABASE_SSL_REJECT_UNAUTHORIZED === 'false') {
    return { rejectUnauthorized: false }
  }
  const isSupabase =
    host.includes('supabase.co') || host.includes('supabase.com')
  if (!isSupabase) {
    return undefined
  }
  return { rejectUnauthorized: false }
}

const poolSsl = poolSslForHost(databaseHost)

/**
 * node-pg does: Object.assign({}, poolConfig, parse(connectionString)).
 * Query params like sslmode= cause parse() to set ssl: {}, which overwrites poolConfig.ssl.
 * Strip SSL query params when we pass explicit ssl on the pool.
 */
function connectionStringForPgPool(
  connectionString: string,
  explicitSsl: { rejectUnauthorized: boolean } | undefined,
): string {
  if (!explicitSsl) {
    return connectionString
  }
  try {
    const u = new URL(connectionString)
    for (const key of [
      'sslmode',
      'ssl',
      'sslcert',
      'sslkey',
      'sslrootcert',
      'uselibpqcompat',
    ]) {
      u.searchParams.delete(key)
    }
    const out = u.toString()
    return out.endsWith('?') ? out.slice(0, -1) : out
  } catch {
    return connectionString
  }
}

const poolConnectionString = connectionStringForPgPool(databaseURL, poolSsl)

export default buildConfig({
  // הגדרת מסד הנתונים
  db: postgresAdapter({
    pool: {
      connectionString: poolConnectionString,
      ...(poolSsl ? { ssl: poolSsl } : {}),
    },
    // חשוב: מונע שינויים אוטומטיים בסכימה הקיימת שלך
    push: false,
    migrationDir: path.resolve(dirname, 'migrations'),
    prodMigrations: [
      {
        name: '20260416_000000_payload_admin_tables',
        up: migrationPayloadAdminTables.up,
        down: migrationPayloadAdminTables.down,
      },
      {
        name: '20260416_000001_payload_preferences',
        up: migrationPayloadPreferences.up,
        down: migrationPayloadPreferences.down,
      },
    ],
  }),

  editor: lexicalEditor({}),

  admin: {
    // הגדרת קולקשן ה-Users כמי שמורשה להיכנס לפאנל הניהול
    user: 'users', 
    meta: {
      titleSuffix: '– AskHub Admin',
    },
  },

  collections: [
    withoutDocLocks(Users),
    withoutDocLocks(Profiles),
    withoutDocLocks(Questions),
    withoutDocLocks(Answers),
    withoutDocLocks(AdminReports),
    withoutDocLocks(ContentPenalties),
    withoutDocLocks(ModerationAppeals),
    withoutDocLocks(ModerationActionLogs),
    withoutDocLocks(SoftDeletedContent),
    withoutDocLocks(DeletedContentRecoveryRequests),
    withoutDocLocks(ViolationRules),
    withoutDocLocks(ContentEditHistory),
    withoutDocLocks(RoleAssignmentHistory),
    withoutDocLocks(TrustScoreAudit),
    withoutDocLocks(UserTrustScore),
    withoutDocLocks(Conversations),
    withoutDocLocks(ConversationParticipants),
    withoutDocLocks(Messages),
    withoutDocLocks(StaffNotes),
    withoutDocLocks(UserFollows),
    withoutDocLocks(ProfileViews),
    withoutDocLocks(ScoutsGuideDocument),
    withoutDocLocks(ModerationFilterPresets),
    withoutDocLocks(ConversationTyping),
  ],

  secret: payloadSecret,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})