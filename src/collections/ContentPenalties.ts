import type { CollectionConfig } from 'payload'

export const ContentPenalties: CollectionConfig = {
  slug: 'content-penalties',
  labels: { singular: 'עונש תוכן', plural: 'עונשי תוכן' },
  dbName: 'content_penalties',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    defaultColumns: ['user', 'rule', 'performedBy', 'created_at'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש',
      required: true,
    },
    {
      name: 'content_id',
      type: 'text',
      label: 'מזהה תוכן',
    },
    {
      name: 'rule',
      type: 'relationship',
      relationTo: 'violation-rules',
      label: 'כלל שהופר',
    },
    {
      name: 'performedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'בוצע על ידי',
    },
    {
      name: 'reversedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'בוטל על ידי',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}
