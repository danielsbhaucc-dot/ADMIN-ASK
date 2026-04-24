import type { CollectionConfig } from 'payload'

export const UserFollows: CollectionConfig = {
  slug: 'user_follows',
  dbName: 'user_follows',
  admin: {
    useAsTitle: 'id',
    group: 'חברתי',
    description: 'עוקבים ונעקבים',
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
      name: 'follower_id',
      type: 'text',
      label: 'עוקב',
      admin: { readOnly: true },
    },
    {
      name: 'following_id',
      type: 'text',
      label: 'נעקב',
      admin: { readOnly: true },
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'נוצר בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
