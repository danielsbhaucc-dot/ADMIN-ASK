import type { CollectionConfig } from 'payload'

export const Answers: CollectionConfig = {
  slug: 'answers',
  dbName: 'answers',
  admin: {
    useAsTitle: 'content',
    group: 'תוכן',
    description: 'תשובות לשאלות',
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
      name: 'question_id',
      type: 'text',
      label: 'מזהה שאלה',
      admin: { readOnly: true },
    },
    {
      name: 'user_id',
      type: 'text',
      label: 'מזהה משתמש',
      admin: { readOnly: true },
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'תוכן',
      required: true,
    },
    {
      name: 'vote_count',
      type: 'number',
      label: 'מספר הצבעות',
      defaultValue: 0,
    },
    {
      name: 'is_accepted',
      type: 'checkbox',
      label: 'תשובה מקובלת',
      defaultValue: false,
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
