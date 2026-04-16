import type { CollectionConfig } from 'payload'

export const StaffNotes: CollectionConfig = {
  slug: 'staff-notes',
  dbName: 'staff_notes',
  admin: {
    useAsTitle: 'id',
    group: 'הודעות',
    defaultColumns: ['sender', 'recipient', 'created_at'],
  },
  fields: [
    {
      name: 'sender',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'שולח',
      required: true,
    },
    {
      name: 'recipient',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נמען',
      required: true,
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}

export const UserFollows: CollectionConfig = {
  slug: 'user-follows',
  dbName: 'user_follows',
  admin: {
    useAsTitle: 'id',
    group: 'חברתי',
    defaultColumns: ['follower', 'followed'],
  },
  fields: [
    {
      name: 'follower',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'עוקב',
      required: true,
    },
    {
      name: 'followed',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'נעקב',
      required: true,
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}

export const ProfileViews: CollectionConfig = {
  slug: 'profile-views',
  dbName: 'profile_views',
  admin: {
    useAsTitle: 'id',
    group: 'חברתי',
    defaultColumns: ['profile', 'viewer'],
  },
  fields: [
    {
      name: 'profile',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'פרופיל שנצפה',
      required: true,
    },
    {
      name: 'viewer',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'צופה',
      required: true,
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}

export const ScoutsGuideDocument: CollectionConfig = {
  slug: 'scouts-guide-document',
  dbName: 'scouts_guide_document',
  admin: {
    useAsTitle: 'id',
    group: 'אחר',
    defaultColumns: ['updatedBy', 'updated_at'],
  },
  fields: [
    {
      name: 'updatedBy',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'עודכן על ידי',
    },
    {
      name: 'updated_at',
      type: 'date',
      label: 'תאריך עדכון',
      admin: { readOnly: true },
    },
  ],
}

export const ModerationFilterPresets: CollectionConfig = {
  slug: 'moderation-filter-presets',
  dbName: 'moderation_filter_presets',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    defaultColumns: ['user', 'created_at'],
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
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}
