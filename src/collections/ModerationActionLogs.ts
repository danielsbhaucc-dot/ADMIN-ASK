import type { CollectionConfig } from 'payload'
import { uuidPk } from './fields/uuidPk'

export const ModerationActionLogs: CollectionConfig = {
  slug: 'moderation-action-logs',
  labels: { singular: 'רשומת פעולת מודרציה', plural: 'יומן פעולות מודרציה' },
  dbName: 'moderation_action_logs',
  admin: {
    useAsTitle: 'action_type',
    group: 'מודרציה',
    defaultColumns: ['actor', 'actor_role', 'action_type', 'target_type', 'created_at'],
  },
  fields: [
    uuidPk,
    {
      name: 'actor',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'מבצע הפעולה',
    },
    {
      name: 'actor_role',
      type: 'select',
      label: 'תפקיד',
      options: [
        { label: 'משתמש', value: 'user' },
        { label: 'סייר', value: 'scout' },
        { label: 'מנחה', value: 'moderator' },
        { label: 'מנהל', value: 'admin' },
      ],
    },
    {
      name: 'action_type',
      type: 'text',
      label: 'סוג פעולה',
      required: true,
    },
    {
      name: 'target_type',
      type: 'text',
      label: 'סוג יעד',
      required: true,
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}
