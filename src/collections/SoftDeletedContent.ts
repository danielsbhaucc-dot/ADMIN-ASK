import type { CollectionConfig } from 'payload'

export const SoftDeletedContent: CollectionConfig = {
  slug: 'soft_deleted_content',
  dbName: 'soft_deleted_content',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    description: 'תוכן שנמחק (soft delete)',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => false,
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
      name: 'original_id',
      type: 'text',
      label: 'מזהה מקורי',
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
        { label: 'פרופיל', value: 'profile' },
      ],
    },
    {
      name: 'original_data',
      type: 'json',
      label: 'נתונים מקוריים',
    },
    {
      name: 'deleted_by',
      type: 'text',
      label: 'נמחק על ידי',
      admin: { readOnly: true },
    },
    {
      name: 'delete_reason',
      type: 'textarea',
      label: 'סיבת מחיקה',
    },
    {
      name: 'can_recover',
      type: 'checkbox',
      label: 'ניתן לשחזור',
      defaultValue: true,
    },
    {
      name: 'auto_delete_at',
      type: 'date',
      label: 'ימחק אוטומטית בתאריך',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'נמחק בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
