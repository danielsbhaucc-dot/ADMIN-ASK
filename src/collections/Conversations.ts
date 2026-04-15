import type { CollectionConfig } from 'payload'

export const Conversations: CollectionConfig = {
  slug: 'conversations',
  dbName: 'conversations',
  admin: {
    useAsTitle: 'id',
    group: 'הודעות',
    defaultColumns: ['created_by', 'created_at'],
  },
  fields: [
    {
      name: 'created_by',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נוצר על ידי',
      required: true,
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך יצירה',
      admin: { readOnly: true },
    },
  ],
}

export const ConversationParticipants: CollectionConfig = {
  slug: 'conversation-participants',
  dbName: 'conversation_participants',
  admin: {
    useAsTitle: 'id',
    group: 'הודעות',
    defaultColumns: ['conversation_id', 'user_id', 'is_muted', 'is_pinned'],
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
      name: 'user_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש',
      required: true,
    },
    {
      name: 'is_pinned',
      type: 'checkbox',
      label: 'מוצמד',
      defaultValue: false,
    },
    {
      name: 'is_muted',
      type: 'checkbox',
      label: 'מושתק',
      defaultValue: false,
    },
  ],
}

export const ConversationTyping: CollectionConfig = {
  slug: 'conversation-typing',
  dbName: 'conversation_typing',
  admin: {
    useAsTitle: 'id',
    group: 'הודעות',
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
      name: 'user_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש',
      required: true,
    },
    {
      name: 'is_typing',
      type: 'checkbox',
      label: 'מקליד',
      defaultValue: false,
    },
    {
      name: 'updated_at',
      type: 'date',
      label: 'עדכון אחרון',
    },
  ],
}
