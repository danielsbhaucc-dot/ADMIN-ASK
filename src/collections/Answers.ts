import type { CollectionConfig } from 'payload'

export const Answers: CollectionConfig = {
  slug: 'answers',
  dbName: 'answers',
  admin: {
    useAsTitle: 'content',
    group: 'תוכן',
    defaultColumns: ['content', 'question_id', 'author_id', 'is_best_answer', 'moderation_status', 'votes'],
  },
  fields: [
    {
      name: 'question_id',
      type: 'relationship',
      relationTo: 'questions',
      label: 'שאלה',
      required: true,
    },
    {
      name: 'author_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'מחבר',
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'תוכן',
      required: true,
    },
    {
      name: 'is_best_answer',
      type: 'checkbox',
      label: 'תשובה הטובה ביותר',
      defaultValue: false,
    },
    {
      name: 'votes',
      type: 'number',
      label: 'הצבעות',
      defaultValue: 0,
    },
    {
      name: 'is_anonymous',
      type: 'checkbox',
      label: 'אנונימי',
      defaultValue: false,
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
      name: 'is_deleted',
      type: 'checkbox',
      label: 'נמחק',
      defaultValue: false,
    },
    {
      name: 'deleted_by',
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
