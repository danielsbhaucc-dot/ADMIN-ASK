import React from 'react'

export default function AdminPremiumBeforeDashboard() {
  return (
    <div className="askhub-dashboard-hero">
      <div className="askhub-dashboard-hero__intro">
        <h2 className="askhub-dashboard-hero__title">ניהול מערכת AskHub</h2>
        <p className="askhub-dashboard-hero__desc">
          סקירה מהירה של פעילות — צבעים, כרטיסים וטיפוגרפיה בסגנון לוח הבקרה שבחרת.
        </p>
      </div>
      <div className="askhub-stats-grid" aria-hidden>
        <div className="askhub-stat-card askhub-stat-card--blue">
          <div className="askhub-stat-card__body">
            <p className="askhub-stat-card__label">סיכום ישויות בלוח</p>
            <p className="askhub-stat-card__value">פעיל</p>
            <p className="askhub-stat-card__trend askhub-stat-card__trend--up">מוכן לניהול</p>
          </div>
          <div className="askhub-stat-card__icon" aria-hidden>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
 />
            </svg>
          </div>
        </div>
        <div className="askhub-stat-card askhub-stat-card--emerald">
          <div className="askhub-stat-card__body">
            <p className="askhub-stat-card__label">זרימת עבודה</p>
            <p className="askhub-stat-card__value">RTL + עברית</p>
            <p className="askhub-stat-card__trend askhub-stat-card__trend--up">ממשק אחיד</p>
          </div>
          <div className="askhub-stat-card__icon" aria-hidden>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="askhub-stat-card askhub-stat-card--rose">
          <div className="askhub-stat-card__body">
            <p className="askhub-stat-card__label">מודרציה ובטיחות</p>
            <p className="askhub-stat-card__value">בקרה</p>
            <p className="askhub-stat-card__trend askhub-stat-card__trend--down">עקוב אחר דיווחים</p>
          </div>
          <div className="askhub-stat-card__icon" aria-hidden>
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 9v4M12 17h.01M5.07 19h13.86a2 2 0 0 0 1.73-3l-6.93-12a2 2 0 0 0-3.46 0l-6.93 12a2 2 0 0 0 1.73 3Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="askhub-welcome-card">
        <h3 className="askhub-welcome-card__title">ברוכים השבים ללוח הבקרה</h3>
        <p className="askhub-welcome-card__text">
          כאן מרוכזים הקולקשנים, הטבלאות והטפסים — עם הדגשות עדינות, מסגרות רכות וכפתורי פעולה בגוון
          האינדיגו והציאן של העיצוב החדש.
        </p>
        <div className="askhub-welcome-card__chips">
          <span>ניהול משתמשים</span>
          <span>תוכן</span>
          <span>מודרציה</span>
          <span>היסטוריה</span>
        </div>
      </div>
    </div>
  )
}
