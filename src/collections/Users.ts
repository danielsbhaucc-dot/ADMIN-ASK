import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'משתמש מערכת',
    plural: 'משתמשי מערכת',
  },
  auth: {
    useSessions: false,
  },
  admin: {
    useAsTitle: 'email',
    group: 'ניהול מערכת',
  },
  fields: [],
}