import type { CollectionConfig } from 'payload'

export const Messages: CollectionConfig = {
  slug: 'messages',
  dbName: 'messages',
  admin: {
    useAsTitle: 'content',
    group: 'הודעות',
    defaultColumns: ['sender_id', 'conversation_id', 'content', 'private', 'created_at'],
  },
  fields: [
    {
      name: 'conversation_id',
      type: 'relationship',
      relationTo: 'conversations',
      label: 'שיחה',
      required: true,
    },
    {
      name: 'sender_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'שולח',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      label: 'תוכן',
      required: true,
    },
    {
      name: 'reply_to',
      type: 'relationship',
      relationTo: 'messages',
      label: 'תגובה להודעה',
    },
    {
      name: 'private',
      type: 'checkbox',
      label: 'פרטי',
      defaultValue: false,
    },
    {
      name: 'topic',
      type: 'text',
      label: 'נושא',
    },
    {
      name: 'extension',
      type: 'text',
      label: 'הרחבה',
    },
    {
      name: 'payload',
      type: 'json',
      label: 'נתונים נוספים',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך שליחה',
      admin: { readOnly: true },
    },
    {
      name: 'updated_at',
      type: 'date',
      label: 'תאריך עדכון',
      admin: { readOnly: true },
    },
    {
      name: 'inserted_at',
      type: 'date',
      label: 'תאריך הכנסה',
      admin: { readOnly: true },
    },
  ],
}
