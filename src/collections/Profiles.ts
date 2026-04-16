import type { CollectionConfig } from 'payload'

export const Profiles: CollectionConfig = {
  slug: 'profiles',
  labels: { singular: 'פרופיל', plural: 'פרופילים' },
  dbName: 'profiles', // שם הטבלה הקיימת ב-Supabase
  admin: {
    useAsTitle: 'username',
    group: 'משתמשים',
    defaultColumns: ['username', 'role', 'is_banned', 'trust_score', 'created_at'],
  },
  auth: false,
  fields: [
    {
      name: 'username',
      type: 'text',
      label: 'שם משתמש',
    },
    {
      name: 'email',
      type: 'email',
      label: 'אימייל',
    },
    {
      name: 'role',
      type: 'select',
      label: 'תפקיד',
      options: [
        { label: 'משתמש', value: 'user' },
        { label: 'סייר', value: 'scout' },
        { label: 'מנחה', value: 'moderator' },
        { label: 'מנהל', value: 'admin' },
      ],
    },
    {
      name: 'is_banned',
      type: 'checkbox',
      label: 'חסום',
      defaultValue: false,
    },
    {
      name: 'trust_score',
      type: 'number',
      label: 'ניקוד אמון',
    },
    {
      name: 'avatar_url',
      type: 'text',
      label: 'תמונת פרופיל (URL)',
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'אודות',
    },
    {
      name: 'appointedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'מונה על ידי',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך הצטרפות',
      admin: { readOnly: true },
    },
  ],
}
