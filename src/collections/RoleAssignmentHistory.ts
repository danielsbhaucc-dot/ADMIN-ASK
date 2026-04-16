import type { CollectionConfig } from 'payload'
import { uuidPk } from './fields/uuidPk'

export const RoleAssignmentHistory: CollectionConfig = {
  slug: 'role-assignment-history',
  labels: { singular: 'שינוי תפקיד', plural: 'היסטוריית שינויי תפקיד' },
  dbName: 'role_assignment_history',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    defaultColumns: ['actor', 'targetUser', 'created_at'],
  },
  fields: [
    uuidPk,
    {
      name: 'actor',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'מבצע',
    },
    {
      name: 'targetUser',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש יעד',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}

export const TrustScoreAudit: CollectionConfig = {
  slug: 'trust-score-audit',
  labels: { singular: 'ביקורת ציון אמון', plural: 'ביקורות ציון אמון' },
  dbName: 'trust_score_audit',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    defaultColumns: ['user', 'performedBy', 'created_at'],
  },
  fields: [
    uuidPk,
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש',
      required: true,
    },
    {
      name: 'performedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'בוצע על ידי',
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}

export const UserTrustScore: CollectionConfig = {
  slug: 'user-trust-score',
  labels: { singular: 'ציון אמון משתמש', plural: 'ציוני אמון משתמשים' },
  dbName: 'user_trust_score',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    defaultColumns: ['user'],
  },
  fields: [
    uuidPk,
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש',
      required: true,
    },
  ],
}
