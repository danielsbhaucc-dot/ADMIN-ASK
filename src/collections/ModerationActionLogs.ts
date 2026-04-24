import type { CollectionConfig } from 'payload'

export const ModerationActionLogs: CollectionConfig = {
  slug: 'moderation_action_logs',
  dbName: 'moderation_action_logs',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    description: 'לוג פעולות מודרציה',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => false,
    update: () => false,
    delete: () => false,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'מזהה',
      admin: { readOnly: true },
    },
    {
      name: 'actor_id',
      type: 'text',
      label: 'מבצע',
      admin: { readOnly: true },
    },
    {
      name: 'action',
      type: 'select',
      label: 'פעולה',
      options: [
        { label: 'יצירה', value: 'create' },
        { label: 'עדכון', value: 'update' },
        { label: 'מחיקה', value: 'delete' },
        { label: 'חסימה', value: 'ban' },
        { label: 'השעייה', value: 'suspend' },
        { label: 'שחרור', value: 'release' },
      ],
    },
    {
      name: 'target_type',
      type: 'select',
      label: 'סוג יעד',
      options: [
        { label: 'משתמש', value: 'user' },
        { label: 'שאלה', value: 'question' },
        { label: 'תשובה', value: 'answer' },
        { label: 'דיווח', value: 'report' },
      ],
    },
    {
      name: 'target_id',
      type: 'text',
      label: 'מזהה יעד',
    },
    {
      name: 'reason',
      type: 'textarea',
      label: 'סיבה',
    },
    {
      name: 'metadata',
      type: 'json',
      label: 'מטא-דאטה',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'נוצר בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
