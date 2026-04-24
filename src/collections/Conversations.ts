import type { CollectionConfig } from 'payload'

export const Conversations: CollectionConfig = {
  slug: 'conversations',
  dbName: 'conversations',
  admin: {
    useAsTitle: 'id',
    group: 'הודעות',
    description: 'שיחות בין משתמשים',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'מזהה',
      admin: { readOnly: true },
    },
    {
      name: 'title',
      type: 'text',
      label: 'כותרת',
    },
    {
      name: 'created_by',
      type: 'text',
      label: 'נוצר על ידי',
      admin: { readOnly: true },
    },
    {
      name: 'is_group',
      type: 'checkbox',
      label: 'שיחת קבוצה',
      defaultValue: false,
    },
    {
      name: 'participant_count',
      type: 'number',
      label: 'מספר משתתפים',
      defaultValue: 0,
    },
    {
      name: 'message_count',
      type: 'number',
      label: 'מספר הודעות',
      defaultValue: 0,
    },
    {
      name: 'last_message_at',
      type: 'date',
      label: 'הודעה אחרונה',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'is_archived',
      type: 'checkbox',
      label: 'בארכיון',
      defaultValue: false,
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'נוצר בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'updated_at',
      type: 'date',
      label: 'עודכן בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
