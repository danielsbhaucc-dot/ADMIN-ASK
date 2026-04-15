import type { CollectionConfig } from 'payload'

export const ContentPenalties: CollectionConfig = {
  slug: 'content-penalties',
  dbName: 'content_penalties',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    defaultColumns: ['user_id', 'rule_id', 'performed_by', 'created_at'],
  },
  fields: [
    {
      name: 'user_id',
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
      name: 'rule_id',
      type: 'relationship',
      relationTo: 'violation-rules',
      label: 'כלל שהופר',
    },
    {
      name: 'performed_by',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'בוצע על ידי',
    },
    {
      name: 'reversed_by',
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
