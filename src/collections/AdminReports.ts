import type { CollectionConfig } from 'payload'

export const AdminReports: CollectionConfig = {
  slug: 'admin_reports',
  dbName: 'admin_reports',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    description: 'דיווחי משתמשים',
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
      name: 'reporter_id',
      type: 'text',
      label: 'מדווח',
      admin: { readOnly: true },
    },
    {
      name: 'reported_user_id',
      type: 'text',
      label: 'משתמש מדווח',
      admin: { readOnly: true },
    },
    {
      name: 'content_type',
      type: 'select',
      label: 'סוג תוכן',
      options: [
        { label: 'שאלה', value: 'question' },
        { label: 'תשובה', value: 'answer' },
        { label: 'פרופיל', value: 'profile' },
        { label: 'הודעה', value: 'message' },
      ],
    },
    {
      name: 'content_id',
      type: 'text',
      label: 'מזהה תוכן',
      admin: { readOnly: true },
    },
    {
      name: 'reason',
      type: 'select',
      label: 'סיבת הדיווח',
      options: [
        { label: 'תוכן פוגעני', value: 'offensive_content' },
        { label: 'ספאם', value: 'spam' },
        { label: 'הונאה', value: 'scam' },
        { label: 'התעללות', value: 'harassment' },
        { label: 'אחר', value: 'other' },
      ],
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'תיאור נוסף',
    },
    {
      name: 'status',
      type: 'select',
      label: 'סטטוס',
      options: [
        { label: 'ממתין', value: 'pending' },
        { label: 'בטיפול', value: 'in_review' },
        { label: 'טופל', value: 'resolved' },
        { label: 'נדחה', value: 'dismissed' },
      ],
      defaultValue: 'pending',
    },
    {
      name: 'priority',
      type: 'select',
      label: 'עדיפות',
      options: [
        { label: 'נמוכה', value: 'low' },
        { label: 'רגילה', value: 'normal' },
        { label: 'גבוהה', value: 'high' },
        { label: 'דחופה', value: 'urgent' },
      ],
      defaultValue: 'normal',
    },
    {
      name: 'assigned_to',
      type: 'text',
      label: 'מוקצה ל',
    },
    {
      name: 'resolution_notes',
      type: 'textarea',
      label: 'פתרון/הערות',
    },
    {
      name: 'action_taken',
      type: 'select',
      label: 'פעולה שננקטה',
      options: [
        { label: 'ללא פעולה', value: 'none' },
        { label: 'אזהרה', value: 'warning' },
        { label: 'מחיקת תוכן', value: 'content_removed' },
        { label: 'חסימה זמנית', value: 'temp_ban' },
        { label: 'חסימה קבועה', value: 'permanent_ban' },
      ],
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
