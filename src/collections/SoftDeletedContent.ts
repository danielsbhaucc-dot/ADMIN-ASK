import type { CollectionConfig } from 'payload'

export const SoftDeletedContent: CollectionConfig = {
  slug: 'soft-deleted-content',
  dbName: 'soft_deleted_content',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    defaultColumns: ['deleted_by', 'penalty_id', 'restored_by'],
  },
  fields: [
    {
      name: 'deleted_by',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נמחק על ידי',
    },
    {
      name: 'penalty_id',
      type: 'relationship',
      relationTo: 'content-penalties',
      label: 'עונש קשור',
    },
    {
      name: 'restored_by',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'שוחזר על ידי',
    },
  ],
}
