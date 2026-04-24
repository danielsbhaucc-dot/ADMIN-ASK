import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  dbName: 'messages',
  admin: {
    useAsTitle: 'content',
    group: 'הודעות',
    description: 'הודעות בשיחות',
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
      name: 'conversation_id',
      type: 'text',
      label: 'שיחה',
      admin: { readOnly: true },
    },
    {
      name: 'sender_id',
      type: 'text',
      label: 'שולח',
      admin: { readOnly: true },
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'תוכן',
      required: true,
    },
    {
      name: 'is_edited',
      type: 'checkbox',
      label: 'נערך',
      defaultValue: false,
    },
    {
      name: 'is_deleted',
      type: 'checkbox',
      label: 'נמחק',
      defaultValue: false,
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
