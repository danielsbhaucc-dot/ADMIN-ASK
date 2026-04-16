import type { CollectionConfig } from 'payload'
import { uuidPk } from './fields/uuidPk'

export const ViolationRules: CollectionConfig = {
  slug: 'violation-rules',
  labels: { singular: 'כלל הפרה', plural: 'כללי הפרה' },
  dbName: 'violation_rules',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
  },
  fields: [
    uuidPk,
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך יצירה',
      admin: { readOnly: true },
    },
  ],
}
