import path from 'path'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Import collections
import { Questions } from './collections/Questions'
import { Answers } from './collections/Answers'
import { Profiles } from './collections/Profiles'
import { AdminReports } from './collections/AdminReports'
import { ContentPenalties } from './collections/ContentPenalties'
import { ModerationAppeals } from './collections/ModerationAppeals'
import { ModerationActionLogs } from './collections/ModerationActionLogs'
import { SoftDeletedContent } from './collections/SoftDeletedContent'
import { DeletedContentRecoveryRequests } from './collections/DeletedContentRecoveryRequests'
import { ViolationRules } from './collections/ViolationRules'
import { ContentEditHistory } from './collections/ContentEditHistory'
import { RoleAssignmentHistory } from './collections/RoleAssignmentHistory'
import { UserTrustScore } from './collections/UserTrustScore'
import { Conversations } from './collections/Conversations'
import { ConversationParticipants } from './collections/ConversationParticipants'
import { Messages } from './collections/Messages'
import { UserFollows } from './collections/UserFollows'

export default buildConfig({
  // Admin configuration with Hebrew support
  admin: {
    components: {
      // Custom components will be added here
    },
    meta: {
      titleSuffix: ' - AskHub Admin',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
    pagination: {
      defaultLimit: 20,
      limits: [10, 20, 50, 100],
    },
  },

  // IMPORTANT: Don't push schema changes to existing database
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: false, // Critical: Prevents Payload from modifying existing schema
  }),

  // Collections mapping to existing Supabase tables
  collections: [
    Questions,
    Answers,
    Profiles,
    AdminReports,
    ContentPenalties,
    ModerationAppeals,
    ModerationActionLogs,
    SoftDeletedContent,
    DeletedContentRecoveryRequests,
    ViolationRules,
    ContentEditHistory,
    RoleAssignmentHistory,
    UserTrustScore,
    Conversations,
    ConversationParticipants,
    Messages,
    UserFollows,
  ],

  // Rich text editor
  editor: lexicalEditor(),

  // Server-side configuration
  secret: process.env.PAYLOAD_SECRET || '',

  // TypeScript paths
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  // GraphQL configuration
  graphQL: {
    schemaOutputFile: path.resolve(dirname, 'generated-schema.graphql'),
  },

  // Plugins (empty - add storage adapter if needed for file uploads)
  plugins: [],

  // Custom CSS for colorful design
  cssPath: path.resolve(dirname, './styles/admin-styles.css'),
})
