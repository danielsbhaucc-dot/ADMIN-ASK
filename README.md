# AskHub Admin Panel – Payload CMS

## מה יש כאן
לוח בקרה מלא לאתר AskHub, מבוסס Payload CMS 3.0.
מתחבר ל-Supabase הקיים שלך **בלי לשנות שום דבר** במסד הנתונים.

---

## שלב 1 – התקנה

### אפשרות א: פרויקט נפרד (מומלץ)
```bash
# צור תיקייה חדשה לצד הפרויקט הקיים שלך
mkdir askhub-admin
cd askhub-admin

# העתק את כל הקבצים מהתיקייה הזו לכאן
# ואז:
npm install
```

### אפשרות ב: שלב לתוך הפרויקט הקיים
```bash
# בתיקיית הפרויקט הקיים שלך:
npm install payload @payloadcms/next @payloadcms/db-postgres @payloadcms/richtext-lexical

# העתק את תיקיית src/collections ואת src/payload.config.ts
# עדכן את next.config.ts כמו בקובץ next.config.ts כאן
```

---

## שלב 2 – הגדר משתני סביבה

```bash
cp .env.example .env.local
```

פתח `.env.local` ומלא:

**DATABASE_URL** – מצא ב: Supabase Dashboard → Settings → Database → Connection string (URI mode)
```
postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres
```

**PAYLOAD_SECRET** – כל מחרוזת אקראית ארוכה (לפחות 32 תווים)

---

## שלב 3 – הפעל

```bash
npm run dev
```

פתח: **http://localhost:3001/admin**

בפעם הראשונה תתבקש ליצור משתמש מנהל ראשון.

---

## מה יופיע בלוח הבקרה

הכל מחולק לקבוצות:

**תוכן**
- שאלות (questions)
- תשובות (answers)

**משתמשים**
- פרופילים (profiles) – עם אפשרות לחסום/לשנות תפקיד

**מודרציה**
- דיווחים (admin_reports) – עם סטטוס ממתין/טופל
- עונשים (content_penalties)
- עררים (moderation_appeals)
- לוג פעולות (moderation_action_logs)
- תוכן מחוק (soft_deleted_content)
- בקשות שחזור (deleted_content_recovery_requests)
- כללי הפרה (violation_rules)
- פרסטים של סינון (moderation_filter_presets)

**היסטוריה**
- היסטוריית עריכות (content_edit_history)
- היסטוריית תפקידים (role_assignment_history)
- אודיט ניקוד אמון (trust_score_audit)
- ניקודי אמון (user_trust_score)

**הודעות**
- שיחות (conversations)
- משתתפים (conversation_participants)
- הודעות (messages)
- הערות סגל (staff_notes)

**חברתי**
- עוקבים (user_follows)
- צפיות בפרופיל (profile_views)

---

## הוספת תכונה חדשה בעתיד

### אם הוספת טבלה חדשה ב-Supabase:
1. צור קובץ חדש ב-`src/collections/NewTable.ts`
2. הוסף אותו ל-`src/payload.config.ts` (ב-imports וב-collections array)
3. הפעל מחדש – Payload יתלבש עליו אוטומטית

### אם הוספת עמודה לטבלה קיימת:
1. פתח את הקובץ המתאים ב-`src/collections/`
2. הוסף field חדש ל-`fields` array
3. הפעל מחדש

### דוגמה להוספת Collection חדש:
```typescript
// src/collections/Tags.ts
import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
  slug: 'tags',
  dbName: 'tags', // שם הטבלה ב-Supabase
  admin: {
    useAsTitle: 'name',
    group: 'תוכן',
  },
  fields: [
    { name: 'name', type: 'text', label: 'שם', required: true },
    { name: 'slug', type: 'text', label: 'סלאג' },
    { name: 'created_at', type: 'date', label: 'תאריך', admin: { readOnly: true } },
  ],
}
```

---

## דגלים חשובים

### `push: false` ב-payload.config.ts
זה **קריטי**. זה מונע מ-Payload לשנות את הטבלאות הקיימות שלך.
**אל תשנה את זה.**

### שינויים בסכמה
אם תצטרך לשנות את הסכמה ב-Supabase – עשה זאת ישירות ב-Supabase SQL Editor כרגיל, ואז עדכן את ה-Collection המתאים ב-Payload.

---

## פורט
הפרויקט רץ על פורט 3001 כדי לא להתנגש עם הפרויקט הראשי שלך (שרץ על 3000).
אם צריך לשנות:
```bash
# ב-package.json:
"dev": "next dev -p 3002"
```
