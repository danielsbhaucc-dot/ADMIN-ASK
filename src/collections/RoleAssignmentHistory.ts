import type { CollectionConfig } from 'payload'

export const RoleAssignmentHistory: CollectionConfig = {
  slug: 'role-assignment-history',
  dbName: 'role_assignment_history',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    defaultColumns: ['actor', 'targetUser', 'created_at'],
  },
  fields: [
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
  dbName: 'trust_score_audit',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    defaultColumns: ['user', 'performedBy', 'created_at'],
  },
  fields: [
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
  dbName: 'user_trust_score',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    defaultColumns: ['user'],
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש',
      required: true,
    },
  ],
}
