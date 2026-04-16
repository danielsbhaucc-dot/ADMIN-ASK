import type { CollectionConfig } from 'payload'

export const DeletedContentRecoveryRequests: CollectionConfig = {
  slug: 'deleted-content-recovery-requests',
  labels: { singular: 'בקשת שחזור תוכן', plural: 'בקשות שחזור תוכן' },
  dbName: 'deleted_content_recovery_requests',
  admin: {
    useAsTitle: 'target_type',
    group: 'מודרציה',
    defaultColumns: ['requestedBy', 'target_type', 'status', 'reviewedBy', 'created_at'],
  },
  fields: [
    {
      name: 'requestedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'התבקש על ידי',
      required: true,
    },
    {
      name: 'requested_by_role',
      type: 'select',
      label: 'תפקיד המבקש',
      options: [
        { label: 'משתמש', value: 'user' },
        { label: 'סייר', value: 'scout' },
        { label: 'מנחה', value: 'moderator' },
        { label: 'מנהל', value: 'admin' },
      ],
    },
    {
      name: 'target_type',
      type: 'text',
      label: 'סוג תוכן',
      required: true,
    },
    {
      name: 'target_id',
      type: 'text',
      label: 'מזהה תוכן',
      required: true,
    },
    {
      name: 'reason',
      type: 'textarea',
      label: 'סיבה',
    },
    {
      name: 'status',
      type: 'select',
      label: 'סטטוס',
      defaultValue: 'pending',
      options: [
        { label: 'ממתין', value: 'pending' },
        { label: 'אושר', value: 'approved' },
        { label: 'נדחה', value: 'rejected' },
      ],
    },
    {
      name: 'reviewedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נסקר על ידי',
    },
    {
      name: 'reviewed_at',
      type: 'date',
      label: 'תאריך סקירה',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך בקשה',
      admin: { readOnly: true },
    },
  ],
}
