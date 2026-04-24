import type { CollectionConfig } from 'payload'

export const Profiles: CollectionConfig = {
  slug: 'profiles',
  dbName: 'profiles',
  admin: {
    useAsTitle: 'display_name',
    group: 'משתמשים',
    description: 'פרופילי משתמשים',
  },
  access: {
    read: () => true,
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
      label: 'מזהה משתמש',
      admin: { readOnly: true },
    },
    {
      name: 'display_name',
      type: 'text',
      label: 'שם תצוגה',
      required: true,
    },
    {
      name: 'bio',
      type: 'textarea',
      label: 'ביוגרפיה',
    },
    {
      name: 'avatar_url',
      type: 'text',
      label: 'URL אווטר',
    },
    {
      name: 'role',
      type: 'select',
      label: 'תפקיד',
      options: [
        { label: 'משתמש רגיל', value: 'user' },
        { label: 'מודרטור', value: 'moderator' },
        { label: 'סופרוויזר', value: 'supervisor' },
        { label: 'אדמין', value: 'admin' },
        { label: 'סופר אדמין', value: 'super_admin' },
      ],
      defaultValue: 'user',
    },
    {
      name: 'trust_score',
      type: 'number',
      label: 'ניקוד אמון',
      defaultValue: 0,
      min: 0,
      max: 100,
    },
    {
      name: 'is_verified',
      type: 'checkbox',
      label: 'מאומת',
      defaultValue: false,
    },
    {
      name: 'reputation_points',
      type: 'number',
      label: 'נקודות מוניטין',
      defaultValue: 0,
    },
    {
      name: 'question_count',
      type: 'number',
      label: 'מספר שאלות',
      defaultValue: 0,
    },
    {
      name: 'answer_count',
      type: 'number',
      label: 'מספר תשובות',
      defaultValue: 0,
    },
    {
      name: 'follower_count',
      type: 'number',
      label: 'מספר עוקבים',
      defaultValue: 0,
    },
    {
      name: 'following_count',
      type: 'number',
      label: 'מספר נעקבים',
      defaultValue: 0,
    },
    {
      name: 'is_banned',
      type: 'checkbox',
      label: 'מוחרם',
      defaultValue: false,
    },
    {
      name: 'ban_reason',
      type: 'textarea',
      label: 'סיבת חרם',
    },
    {
      name: 'banned_until',
      type: 'date',
      label: 'חסום עד תאריך',
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
