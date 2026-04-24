import type { CollectionConfig } from 'payload'

export const ModerationAppeals: CollectionConfig = {
  slug: 'moderation_appeals',
  dbName: 'moderation_appeals',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    description: 'ערעורים על החלטות מודרציה',
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
      name: 'user_id',
      type: 'text',
      label: 'מערער',
      admin: { readOnly: true },
    },
    {
      name: 'penalty_id',
      type: 'text',
      label: 'מזהה עונש',
    },
    {
      name: 'content_type',
      type: 'select',
      label: 'סוג תוכן',
      options: [
        { label: 'עונש', value: 'penalty' },
        { label: 'מחיקת תוכן', value: 'content_removal' },
        { label: 'חסימה', value: 'ban' },
      ],
    },
    {
      name: 'reason',
      type: 'textarea',
      label: 'נימוק הערעור',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      label: 'סטטוס',
      options: [
        { label: 'ממתין', value: 'pending' },
        { label: 'בבדיקה', value: 'under_review' },
        { label: 'התקבל', value: 'approved' },
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
      label: 'הערות בדיקה',
    },
    {
      name: 'resolution',
      type: 'select',
      label: 'החלטה',
      options: [
        { label: 'אין החלטה', value: 'none' },
        { label: 'התקבל - ביטול העונש', value: 'accepted_reversed' },
        { label: 'התקבל - הקלה בעונש', value: 'accepted_reduced' },
        { label: 'נדחה', value: 'rejected' },
      ],
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
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
