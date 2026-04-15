import type { CollectionConfig } from 'payload'

export const ModerationAppeals: CollectionConfig = {
  slug: 'moderation-appeals',
  dbName: 'moderation_appeals',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    defaultColumns: ['appellant_id', 'status', 'reviewed_by'],
  },
  fields: [
    {
      name: 'appellant_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'מגיש הערר',
      required: true,
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
      name: 'reviewed_by',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נסקר על ידי',
    },
  ],
}
