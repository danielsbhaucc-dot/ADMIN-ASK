import type { CollectionConfig } from 'payload'

export const ContentEditHistory: CollectionConfig = {
  slug: 'content-edit-history',
  dbName: 'content_edit_history',
  admin: {
    useAsTitle: 'content_type',
    group: 'היסטוריה',
    defaultColumns: ['content_type', 'editor_id', 'editor_role', 'reason', 'created_at'],
  },
  fields: [
    {
      name: 'content_type',
      type: 'text',
      label: 'סוג תוכן',
      required: true,
    },
    {
      name: 'content_id',
      type: 'text',
      label: 'מזהה תוכן',
      required: true,
    },
    {
      name: 'editor_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'עורך',
    },
    {
      name: 'editor_role',
      type: 'select',
      label: 'תפקיד עורך',
      options: [
        { label: 'משתמש', value: 'user' },
        { label: 'סייר', value: 'scout' },
        { label: 'מנחה', value: 'moderator' },
        { label: 'מנהל', value: 'admin' },
      ],
    },
    {
      name: 'previous_content',
      type: 'textarea',
      label: 'תוכן קודם',
    },
    {
      name: 'new_content',
      type: 'textarea',
      label: 'תוכן חדש',
    },
    {
      name: 'reason',
      type: 'text',
      label: 'סיבת עריכה',
    },
    {
      name: 'metadata',
      type: 'json',
      label: 'מטא-דאטה',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}
