import type { CollectionConfig } from 'payload'

export const SoftDeletedContent: CollectionConfig = {
  slug: 'soft-deleted-content',
  dbName: 'soft_deleted_content',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    defaultColumns: ['deletedBy', 'penalty', 'restoredBy'],
  },
  fields: [
    {
      name: 'deletedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נמחק על ידי',
    },
    {
      name: 'penalty',
      type: 'relationship',
      relationTo: 'content-penalties',
      label: 'עונש קשור',
    },
    {
      name: 'restoredBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'שוחזר על ידי',
    },
  ],
}
