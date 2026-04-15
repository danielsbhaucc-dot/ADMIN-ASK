import type { CollectionConfig } from 'payload'

export const ModerationActionLogs: CollectionConfig = {
  slug: 'moderation-action-logs',
  dbName: 'moderation_action_logs',
  admin: {
    useAsTitle: 'action_type',
    group: 'מודרציה',
    defaultColumns: ['actor_id', 'actor_role', 'action_type', 'target_type', 'created_at'],
  },
  fields: [
    {
      name: 'actor_id',
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
