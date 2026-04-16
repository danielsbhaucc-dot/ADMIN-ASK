import React from 'react'

const E_CONTROL = '\uD83C\uDF9B\uFE0F'
const E_CHART = '\uD83D\uDCCA'
const E_SHIELD = '\uD83D\uDEE1\uFE0F'
const E_SPEECH = '\uD83D\uDCAC'
const E_ZAP = '\u26A1'
const E_TABLE = '\uD83D\uDCCB'
const E_LINK = '\uD83D\uDD17'

export default function AdminPremiumBeforeDashboard() {
  return (
    <div className="askhub-welcome-card">
      <h2 className="askhub-welcome-card__title">
        {E_CONTROL} לוח הבקרה שלך — מרוכז, ברור, מקצועי
      </h2>
      <p className="askhub-welcome-card__text">
        כאן תנהלו את AskHub בסטנדרט פרימיום: טבלאות מסודרות, קווי הפרדה עדינים, טאבים ברורים ופס צבע
        תחת כותרות — הכול בעברית מלאה ובכיוון RTL נוח, בלי רעש ויזואלי.
      </p>
      <div className="askhub-welcome-card__chips" aria-hidden>
        <span>
          {E_CHART} סקירה וניהול
        </span>
        <span>
          {E_SHIELD} מודרציה
        </span>
        <span>
          {E_SPEECH} תקשורת
        </span>
        <span>
          {E_TABLE} רשימות וטבלאות
        </span>
        <span>
          {E_LINK} קישוריות בין ישויות
        </span>
        <span>
          {E_ZAP} זרימה מהירה
        </span>
      </div>
    </div>
  )
}
