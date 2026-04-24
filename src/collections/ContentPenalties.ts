import type { CollectionConfig } from 'payload'

export const ContentPenalties: CollectionConfig = {
  slug: 'content_penalties',
  dbName: 'content_penalties',
  admin: {
    useAsTitle: 'id',
    group: 'מודרציה',
    description: 'עונשים על תוכן',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      label: 'מזהה',
      admin: { readOnly: true },
    },
    {
      name: 'user_id',
      type: 'text',
      label: 'משתמש',
      admin: { readOnly: true },
    },
    {
      name: 'content_type',
      type: 'select',
      label: 'סוג תוכן',
      options: [
        { label: 'שאלה', value: 'question' },
        { label: 'תשובה', value: 'answer' },
        { label: 'הודעה', value: 'message' },
      ],
    },
    {
      name: 'content_id',
      type: 'text',
      label: 'מזהה תוכן',
    },
    {
      name: 'violation_type',
      type: 'select',
      label: 'סוג הפרה',
      options: [
        { label: 'דיבורים פוגעניים', value: 'hate_speech' },
        { label: 'הטרדה', value: 'harassment' },
        { label: 'תוכן מיני', value: 'sexual_content' },
        { label: 'אלימות', value: 'violence' },
        { label: 'ספאם', value: 'spam' },
        { label: 'מידע שגוי', value: 'misinformation' },
        { label: 'זכויות יוצרים', value: 'copyright' },
      ],
    },
    {
      name: 'penalty_type',
      type: 'select',
      label: 'סוג עונש',
      options: [
        { label: 'אזהרה', value: 'warning' },
        { label: 'הסרת תוכן', value: 'content_removal' },
        { label: 'הגבלת פרסום', value: 'posting_restriction' },
        { label: 'חסימה זמנית', value: 'temporary_ban' },
        { label: 'חסימה קבועה', value: 'permanent_ban' },
      ],
    },
    {
      name: 'severity',
      type: 'select',
      label: 'חומרה',
      options: [
        { label: 'קלה', value: 'minor' },
        { label: 'בינונית', value: 'moderate' },
        { label: 'חמורה', value: 'severe' },
        { label: 'קריטית', value: 'critical' },
      ],
    },
    {
      name: 'reason',
      type: 'textarea',
      label: 'סיבה',
      required: true,
    },
    {
      name: 'evidence',
      type: 'textarea',
      label: 'ראיות',
    },
    {
      name: 'duration_hours',
      type: 'number',
      label: 'משך (שעות)',
    },
    {
      name: 'expires_at',
      type: 'date',
      label: 'פג תוקף בתאריך',
    },
    {
      name: 'is_active',
      type: 'checkbox',
      label: 'פעיל',
      defaultValue: true,
    },
    {
      name: 'appealed',
      type: 'checkbox',
      label: 'הוגש ערעור',
      defaultValue: false,
    },
    {
      name: 'appeal_id',
      type: 'text',
      label: 'מזהה ערעור',
    },
    {
      name: 'imposed_by',
      type: 'text',
      label: 'הוטל על ידי',
      admin: { readOnly: true },
    },
    {
      name: 'created_at',
      type: 'date',
      label: 'נוצר בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
    {
      name: 'updated_at',
      type: 'date',
      label: 'עודכן בתאריך',
      admin: { readOnly: true, date: { pickerAppearance: 'dayAndTime' } },
    },
  ],
}
