import type { CollectionConfig } from 'payload'

export const RoleAssignmentHistory: CollectionConfig = {
  slug: 'role-assignment-history',
  dbName: 'role_assignment_history',
  admin: {
    useAsTitle: 'id',
    group: 'היסטוריה',
    defaultColumns: ['actor_id', 'target_user_id', 'created_at'],
  },
  fields: [
    {
      name: 'actor_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'מבצע',
    },
    {
      name: 'target_user_id',
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
    defaultColumns: ['user_id', 'performed_by', 'created_at'],
  },
  fields: [
    {
      name: 'user_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש',
      required: true,
    },
    {
      name: 'performed_by',
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
    defaultColumns: ['user_id'],
  },
  fields: [
    {
      name: 'user_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'משתמש',
      required: true,
    },
  ],
}
