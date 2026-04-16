import React from 'react'

const E_SPARKLES = '\u2728'
const E_ROCKET = '\uD83D\uDE80'

export default function AdminPremiumHeader() {
  return (
    <div className="askhub-top-banner" role="presentation">
      <div className="askhub-top-banner__inner">
        <span className="askhub-top-banner__emoji" aria-hidden>
          {E_SPARKLES}
        </span>
        <span>לוח בקרה AskHub – ניהול, מודרציה ותוכן במקום אחד</span>
        <span className="askhub-top-banner__emoji" aria-hidden>
          {E_ROCKET}
        </span>
      </div>
    </div>
  )
}
