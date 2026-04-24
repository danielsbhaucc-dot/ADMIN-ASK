import type { CollectionConfig } from 'payload'

export const RoleAssignmentHistory: CollectionConfig = {
  slug: 'role_assignment_history',
  dbName: 'role_assignment_history',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    description: 'היסטוריית שינויי תפקידים',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: () => false,
    update: () => false,
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
      name: 'previous_role',
      type: 'text',
      label: 'תפקיד קודם',
    },
    {
      name: 'new_role',
      type: 'text',
      label: 'תפקיד חדש',
    },
    {
      name: 'assigned_by',
      type: 'text',
      label: 'מי שינה',
      admin: { readOnly: true },
    },
    {
      name: 'reason',
      type: 'textarea',
      label: 'סיבה',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'שונה בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
