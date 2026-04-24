import type { CollectionConfig } from 'payload'

export const UserTrustScore: CollectionConfig = {
  slug: 'user_trust_score',
  dbName: 'user_trust_score',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    description: 'ניקוד אמון משתמשים',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => false,
    update: ({ req: { user } }) => !!user,
    delete: () => false,
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
      label: 'משתמש',
      admin: { readOnly: true },
    },
    {
      name: 'score',
      type: 'number',
      label: 'ניקוד',
      min: 0,
      max: 100,
    },
    {
      name: 'change_reason',
      type: 'textarea',
      label: 'סיבת השינוי',
    },
    {
      name: 'changed_by',
      type: 'text',
      label: 'שינה על ידי',
      admin: { readOnly: true },
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'שונה בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
