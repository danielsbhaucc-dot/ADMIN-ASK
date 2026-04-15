import type { CollectionConfig } from 'payload'

export const StaffNotes: CollectionConfig = {
  slug: 'staff-notes',
  dbName: 'staff_notes',
  admin: {
    useAsTitle: 'id',
    group: 'הודעות',
    defaultColumns: ['sender_id', 'recipient_id', 'created_at'],
  },
  fields: [
    {
      name: 'sender_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'שולח',
      required: true,
    },
    {
      name: 'recipient_id',
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
    defaultColumns: ['follower_id', 'followed_id'],
  },
  fields: [
    {
      name: 'follower_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'עוקב',
      required: true,
    },
    {
      name: 'followed_id',
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
    defaultColumns: ['profile_id', 'viewer_id'],
  },
  fields: [
    {
      name: 'profile_id',
      type: 'relationship',
      relationTo: 'profiles',
      label: 'פרופיל שנצפה',
      required: true,
    },
    {
      name: 'viewer_id',
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
    defaultColumns: ['updated_by', 'updated_at'],
  },
  fields: [
    {
      name: 'updated_by',
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
    defaultColumns: ['user_id', 'created_at'],
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
      name: 'created_at',
      type: 'date',
      label: 'תאריך',
      admin: { readOnly: true },
    },
  ],
}
