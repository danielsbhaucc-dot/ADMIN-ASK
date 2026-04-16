import type { CollectionConfig } from 'payload'

export const ViolationRules: CollectionConfig = {
  slug: 'violation-rules',
  labels: { singular: 'כלל הפרה', plural: 'כללי הפרה' },
  dbName: 'violation_rules',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
  },
  fields: [
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך יצירה',
      admin: { readOnly: true },
    },
  ],
}
