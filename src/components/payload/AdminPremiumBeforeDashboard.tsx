import React from 'react'

const E_CONTROL = '\uD83C\uDF9B\uFE0F'
const E_CHART = '\uD83D\uDCCA'
const E_SHIELD = '\uD83D\uDEE1\uFE0F'
const E_SPEECH = '\uD83D\uDCAC'
const E_ZAP = '\u26A1'

export default function AdminPremiumBeforeDashboard() {
  return (
    <div className="askhub-welcome-card">
      <h2 className="askhub-welcome-card__title">
        {E_CONTROL} שלום וברוכים הבאים
      </h2>
      <p className="askhub-welcome-card__text">
        מוכנים לנהל את AskHub מלוח צבעוני, מהיר וברור – עם הפרדות, צללים ופינות מעוגלות שמדגישות את
        מה שחשוב באמת.
      </p>
      <div className="askhub-welcome-card__chips" aria-hidden>
        <span>
          {E_CHART} תובנות וניהול
        </span>
        <span>
          {E_SHIELD} מודרציה
        </span>
        <span>
          {E_SPEECH} קהילה
        </span>
        <span>
          {E_ZAP} קיצורי דרך
        </span>
      </div>
    </div>
  )
}
