import type { Field } from 'payload'

/** טבלאות Supabase עם UUID כ-primary key — חובה כדי ש-Payload ישאל בטקסט ולא במספר */
export const uuidPk: Field = {
  name: 'id',
  type: 'text',
  admin: {
    readOnly: true,
    description: 'מזהה UUID במסד',
  },
}
