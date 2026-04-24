import type { CollectionConfig } from 'payload'

export const Questions: CollectionConfig = {
  slug: 'questions',
  dbName: 'questions', // Maps to existing Supabase table
  admin: {
    useAsTitle: 'title',
    group: 'תוכן',
    description: 'שאלות מהקהילה',
  },
  access: {
    read: () => true,
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
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'תוכן',
      required: true,
    },
    {
      name: 'user_id',
      type: 'text',
      label: 'מזהה משתמש',
      admin: { readOnly: true },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'סלאג',
    },
    {
      name: 'status',
      type: 'select',
      label: 'סטטוס',
      options: [
        { label: 'פעיל', value: 'active' },
        { label: 'מושהה', value: 'suspended' },
        { label: 'נמחק', value: 'deleted' },
      ],
      defaultValue: 'active',
    },
    {
      name: 'vote_count',
      type: 'number',
      label: 'מספר הצבעות',
      defaultValue: 0,
    },
    {
      name: 'view_count',
      type: 'number',
      label: 'מספר צפיות',
      defaultValue: 0,
    },
    {
      name: 'answer_count',
      type: 'number',
      label: 'מספר תשובות',
      defaultValue: 0,
    },
    {
      name: 'is_pinned',
      type: 'checkbox',
      label: 'מוצמד',
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
