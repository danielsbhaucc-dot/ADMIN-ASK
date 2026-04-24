import type { CollectionConfig } from 'payload'

export const DeletedContentRecoveryRequests: CollectionConfig = {
  slug: 'deleted_content_recovery_requests',
  dbName: 'deleted_content_recovery_requests',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    description: 'בקשות לשחזור תוכן',
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
      name: 'requester_id',
      type: 'text',
      label: 'מבקש',
      admin: { readOnly: true },
    },
    {
      name: 'deleted_content_id',
      type: 'text',
      label: 'תוכן שנמחק',
    },
    {
      name: 'reason',
      type: 'textarea',
      label: 'סיבת הבקשה',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'סטטוס',
      options: [
        { label: 'ממתין', value: 'pending' },
        { label: 'בבדיקה', value: 'under_review' },
        { label: 'אושר', value: 'approved' },
        { label: 'נדחה', value: 'rejected' },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'reviewed_by',
      type: 'text',
      label: 'נבדק על ידי',
    },
    {
      name: 'review_notes',
      type: 'textarea',
      label: 'הערות',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'נוצר בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'reviewed_at',
      type: 'date',
      label: 'נבדק בתאריך',
    },
  ],
}
