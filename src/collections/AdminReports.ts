import type { CollectionConfig } from 'payload'

export const AdminReports: CollectionConfig = {
  slug: 'admin-reports',
  dbName: 'admin_reports',
  admin: {
    useAsTitle: 'reason',
    group: 'מודרציה',
    defaultColumns: ['content_type', 'reason', 'status', 'reporter_id', 'created_at'],
  },
  fields: [
    {
      name: 'reporter_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'מדווח',
    },
    {
      name: 'content_id',
      type: 'text',
      label: 'מזהה תוכן',
    },
    {
      name: 'content_type',
      type: 'select',
      label: 'סוג תוכן',
      options: [
        { label: 'שאלה', value: 'question' },
        { label: 'תשובה', value: 'answer' },
        { label: 'משתמש', value: 'user' },
        { label: 'הודעה', value: 'message' },
      ],
    },
    {
      name: 'reason',
      type: 'textarea',
      label: 'סיבה',
    },
    {
      name: 'details',
      type: 'textarea',
      label: 'פרטים',
    },
    {
      name: 'status',
      type: 'select',
      label: 'סטטוס',
      defaultValue: 'pending',
      options: [
        { label: 'ממתין', value: 'pending' },
        { label: 'טופל', value: 'resolved' },
        { label: 'נסגר', value: 'dismissed' },
      ],
    },
    {
      name: 'target_type',
      type: 'text',
      label: 'סוג יעד',
    },
    {
      name: 'target_id',
      type: 'text',
      label: 'מזהה יעד',
    },
    {
      name: 'resolved_by',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'טופל על ידי',
    },
    {
      name: 'resolved_at',
      type: 'date',
      label: 'תאריך טיפול',
    },
    {
      name: 'resolution_note',
      type: 'textarea',
      label: 'הערת סגירה',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך דיווח',
      admin: { readOnly: true },
    },
  ],
}
