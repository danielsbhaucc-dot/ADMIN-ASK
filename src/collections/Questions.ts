import type { CollectionConfig } from 'payload'

export const Questions: CollectionConfig = {
  slug: 'questions',
  labels: { singular: 'שאלה', plural: 'שאלות' },
  dbName: 'questions',
  admin: {
    useAsTitle: 'title',
    group: 'תוכן',
    defaultColumns: ['title', 'author', 'moderation_status', 'votes', 'is_deleted', 'created_at'],
  },
  fields: [
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
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'מחבר',
    },
    {
      name: 'moderation_status',
      type: 'select',
      label: 'סטטוס מודרציה',
      defaultValue: 'approved',
      options: [
        { label: 'ממתין', value: 'pending' },
        { label: 'אושר', value: 'approved' },
        { label: 'נדחה', value: 'rejected' },
      ],
    },
    {
      name: 'votes',
      type: 'number',
      label: 'הצבעות',
      defaultValue: 0,
    },
    {
      name: 'is_deleted',
      type: 'checkbox',
      label: 'נמחק',
      defaultValue: false,
    },
    {
      name: 'deletedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נמחק על ידי',
    },
    {
      name: 'deleted_at',
      type: 'date',
      label: 'תאריך מחיקה',
    },
    {
      name: 'deletion_reason',
      type: 'text',
      label: 'סיבת מחיקה',
    },
    {
      name: 'deleted_by_role',
      type: 'select',
      label: 'תפקיד שמחק',
      options: [
        { label: 'משתמש', value: 'user' },
        { label: 'סייר', value: 'scout' },
        { label: 'מנחה', value: 'moderator' },
        { label: 'מנהל', value: 'admin' },
      ],
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך יצירה',
      admin: { readOnly: true },
    },
  ],
}
