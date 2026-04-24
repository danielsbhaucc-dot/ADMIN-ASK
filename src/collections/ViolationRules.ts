import type { CollectionConfig } from 'payload'

export const ViolationRules: CollectionConfig = {
  slug: 'violation_rules',
  dbName: 'violation_rules',
  admin: {
    useAsTitle: 'name',
    group: 'מודרציה',
    description: 'כללי הפרה ומדיניות',
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
      name: 'name',
      type: 'text',
      label: 'שם הכלל',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'תיאור',
      required: true,
    },
    {
      name: 'category',
      type: 'select',
      label: 'קטגוריה',
      options: [
        { label: 'תוכן', value: 'content' },
        { label: 'התנהגות', value: 'behavior' },
        { label: 'בטיחות', value: 'safety' },
        { label: 'ספאם', value: 'spam' },
      ],
    },
    {
      name: 'severity',
      type: 'select',
      label: 'חומרה',
      options: [
        { label: 'נמוכה', value: 'low' },
        { label: 'בינונית', value: 'medium' },
        { label: 'גבוהה', value: 'high' },
        { label: 'קריטית', value: 'critical' },
      ],
    },
    {
      name: 'default_penalty',
      type: 'select',
      label: 'עונש ברירת מחדל',
      options: [
        { label: 'אזהרה', value: 'warning' },
        { label: 'הסרת תוכן', value: 'content_removal' },
        { label: 'חסימה זמנית', value: 'temp_ban' },
        { label: 'חסימה קבועה', value: 'permanent_ban' },
      ],
    },
    {
      name: 'is_active',
      type: 'checkbox',
      label: 'פעיל',
      defaultValue: true,
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
