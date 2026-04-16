import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    useSessions: false,
  },
  admin: {
    useAsTitle: 'email',
    group: 'ניהול מערכת',
    labels: {
      singular: 'משתמש מערכת',
      plural: 'משתמשי מערכת',
    },
  },
  fields: [],
}