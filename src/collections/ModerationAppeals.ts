import type { CollectionConfig } from 'payload'

export const ModerationAppeals: CollectionConfig = {
  slug: 'moderation-appeals',
  labels: { singular: 'ערר מודרציה', plural: 'עררי מודרציה' },
  dbName: 'moderation_appeals',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    defaultColumns: ['appellant', 'status', 'reviewedBy'],
  },
  fields: [
    {
      name: 'appellant',
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
      name: 'reviewedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נסקר על ידי',
    },
  ],
}
