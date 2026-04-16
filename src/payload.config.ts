import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { parse as parsePgConnectionString } from 'pg-connection-string'
import path from 'path'
import { fileURLToPath } from 'url'

// ייבוא הקולקשן החדש למנהלים
import { Users } from './collections/Users'

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

function normalizeDatabaseUrl(raw: string): string {
  let s = raw.trim().replace(/^\uFEFF/, '')
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    s = s.slice(1, -1).trim()
  }
  return s
}

const databaseURLRaw = process.env.DATABASE_URL
const payloadSecret = process.env.PAYLOAD_SECRET

if (!databaseURLRaw) {
  throw new Error('Missing DATABASE_URL environment variable')
}

const databaseURL = normalizeDatabaseUrl(databaseURLRaw)

if (!/^postgres(ql)?:\/\//i.test(databaseURL)) {
  throw new Error(
    'DATABASE_URL must be a full URI starting with postgresql:// (copy the full string from Supabase, not a fragment).',
  )
}

let parsed: ReturnType<typeof parsePgConnectionString>
try {
  parsed = parsePgConnectionString(databaseURL)
} catch {
  throw new Error(
    'DATABASE_URL is not a valid Postgres URI. Check for quotes, line breaks, or special characters in the password (encode with encodeURIComponent).',
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
  throw new Error('Missing PAYLOAD_SECRET environment variable')
}

export default buildConfig({
  // הגדרת מסד הנתונים
  db: postgresAdapter({
    pool: {
      connectionString: databaseURL,
    },
    // חשוב: מונע שינויים אוטומטיים בסכימה הקיימת שלך
    push: false,
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
    // קולקשן ניהול - חייב להיות ראשון או מוגדר כ-Auth
    Users,

    // תוכן ומשתמשי האתר (לצפייה ועריכה בלבד, ללא Auth של פיילוד)
    Profiles,
    Questions,
    Answers,

    // מודרציה
    AdminReports,
    ContentPenalties,
    ModerationAppeals,
    ModerationActionLogs,
    SoftDeletedContent,
    DeletedContentRecoveryRequests,
    ViolationRules,

    // היסטוריה ואודיט
    ContentEditHistory,
    RoleAssignmentHistory,
    TrustScoreAudit,
    UserTrustScore,

    // הודעות וחברתי
    Conversations,
    ConversationParticipants,
    Messages,
    StaffNotes,
    UserFollows,
    ProfileViews,

    // אחר
    ScoutsGuideDocument,
    ModerationFilterPresets,
    ConversationTyping,
  ],

  secret: payloadSecret,

  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
})