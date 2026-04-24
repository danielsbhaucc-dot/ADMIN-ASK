import type { CollectionConfig } from 'payload'

export const ContentEditHistory: CollectionConfig = {
  slug: 'content_edit_history',
  dbName: 'content_edit_history',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    description: 'היסטוריית עריכות תוכן',
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
      name: 'content_type',
      type: 'select',
      label: 'סוג תוכן',
      options: [
        { label: 'שאלה', value: 'question' },
        { label: 'תשובה', value: 'answer' },
        { label: 'הודעה', value: 'message' },
      ],
    },
    {
      name: 'content_id',
      type: 'text',
      label: 'מזהה תוכן',
    },
    {
      name: 'editor_id',
      type: 'text',
      label: 'עורך',
      admin: { readOnly: true },
    },
    {
      name: 'previous_content',
      type: 'textarea',
      label: 'תוכן קודם',
    },
    {
      name: 'edit_reason',
      type: 'textarea',
      label: 'סיבת העריכה',
    },
    {
      name: 'edit_type',
      type: 'select',
      label: 'סוג עריכה',
      options: [
        { label: 'משתמש', value: 'user' },
        { label: 'מודרציה', value: 'moderation' },
        { label: 'אדמין', value: 'admin' },
      ],
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'נערך בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
