# AskHub Admin - Payload CMS

פאנל ניהול מודרני וצבעוני מבוסס Payload CMS 3.0, מחובר למסד הנתונים הקיים ב-Supabase.

## 🎨 תכונות עיקריות

- **עיצוב צבעוני ומודרני** - Dark theme עם גרדיאנטים ונגיעות צבע
- **תמיכה מלאה בעברית** - RTL ותמיכה בטקסט עברי
- **חיבור ישיר ל-Supabase** - עובד מעל מסד הנתונים הקיים
- **מערכת מודרציה מלאה** - דיווחים, עונשים, ערעורים, לוגים
- **ניהול משתמשים** - פרופילים, תפקידים, הרשאות
- **מערכת הודעות** - שיחות ומסרים

## 📁 Collections מוגדרות

### תוכן
- **שאלות** - ניהול שאלות מהקהילה
- **תשובות** - ניהול תשובות

### משתמשים
- **פרופילים** - ניהול פרופילי משתמשים עם תפקידים וניקוד אמון

### מודרציה
- **דיווחים** - ניהול דיווחי משתמשים עם סטטוס ועדיפות
- **עונשים** - ניהול עונשים וחסימות
- **ערעורים** - טיפול בערעורים על החלטות
- **לוג פעולות** - תיעוד כל פעולות המודרציה
- **תוכן מחוק** - ניהול soft-deleted content
- **בקשות שחזור** - טיפול בבקשות לשחזור תוכן
- **כללי הפרה** - הגדרת מדיניות וחוקי קהילה

### היסטוריה
- **היסטוריית עריכות** - מעקב אחר שינויי תוכן
- **היסטוריית תפקידים** - תיעוד שינויי תפקידים
- **ניקוד אמון** - מעקב אחר ניקוד אמון משתמשים

### הודעות
- **שיחות** - ניהול שיחות
- **משתתפים** - ניהול משתתפי שיחה
- **הודעות** - ניהול הודעות

### חברתי
- **עוקבים** - ניהול מערכת המעקב

## 🚀 התקנה והפעלה

### 1. התקנת תלויות

```bash
# התקנת npm dependencies
npm install
```

### 2. הגדרת משתני סביבה

```bash
# העתקת קובץ הסביבה
cp .env.example .env.local
```

מלא את הפרטים ב-`.env.local`:

```env
# Database - Supabase PostgreSQL
DATABASE_URI=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres

# Payload Secret (מחרוזת אקראית ארוכה)
PAYLOAD_SECRET=your-secret-key-here-at-least-32-characters
```

### 3. הפעלת שרת פיתוח

```bash
npm run dev
```

האדמין יהיה זמין ב: `http://localhost:3001/admin`

בכניסה ראשונה תתבקש ליצור משתמש מנהל ראשון.

## ⚠️ חשוב מאוד

הפרויקט מוגדר עם `push: false` בקונפיגורציה של PostgreSQL. זה אומר ש-Payload **לא ישנה את schema** של מסד הנתונים הקיים. הפרויקט עובד ב-read-write מעל הטבלאות הקיימות.

## 🛠️ טכנולוגיות

- **Payload CMS 3.0** - Headless CMS
- **Next.js 15** - React framework
- **PostgreSQL** - דרך Supabase
- **TypeScript** - טיפוסים
- **Tailwind CSS 4** - עיצוב
- **Lexical** - עורך טקסט עשיר

## 📚 מבנה פרויקט

```
src/
├── app/
│   ├── (payload)/           # Payload routes
│   │   ├── admin/           # Admin interface
│   │   └── api/             # REST & GraphQL API
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── collections/             # Collection definitions
│   ├── Questions.ts
│   ├── Profiles.ts
│   └── ...
├── styles/
│   └── admin-styles.css     # Custom colorful theme
└── payload.config.ts        # Main configuration
```

## 🔐 הרשאות ותפקידים

המערכת תומכת ברמות הרשאות שונות:
- **super_admin** - גישה מלאה
- **admin** - ניהול ומודרציה
- **supervisor** - פיקוח וטיפול בדיווחים
- **moderator** - מודרציה בסיסית

## 📝 פקודות זמינות

```bash
# הפעלת שרת פיתוח
npm run dev

# בנייה לייצור
npm run build

# יצירת types
npm run generate:types

# יצירת import map
npm run generate:importmap

# בדיקת lint
npm run lint
```

## 🤝 תרומה

לשינויים ותוספות, יש ליצור branch חדש ולשלוח pull request.

---

**נוצר עבור AskHub** - הקהילה הישראלית לשאלות ותשובות 💜
