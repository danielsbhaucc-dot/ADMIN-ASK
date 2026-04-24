import type { CollectionConfig } from 'payload'

export const ConversationParticipants: CollectionConfig = {
  slug: 'conversation_participants',
  dbName: 'conversation_participants',
  admin: {
    useAsTitle: 'id',
    group: 'הודעות',
    description: 'משתתפי שיחות',
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
      name: 'user_id',
      type: 'text',
      label: 'משתמש',
      admin: { readOnly: true },
    },
    {
      name: 'is_admin',
      type: 'checkbox',
      label: 'מנהל שיחה',
      defaultValue: false,
    },
    {
      name: 'joined_at',
      type: 'date',
      label: 'הצטרף בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'left_at',
      type: 'date',
      label: 'עזב בתאריך',
    },
    {
      name: 'unread_count',
      type: 'number',
      label: 'הודעות שלא נקראו',
      defaultValue: 0,
    },
    {
      name: 'last_read_at',
      type: 'date',
      label: 'נקרא לאחרונה',
    },
  ],
}
