import React from 'react'

const E_CHART = '\uD83D\uDCCA'
const E_SPARK = '\u2728'

export default function AdminPremiumHeader() {
  return (
    <div className="askhub-top-banner" role="presentation">
      <div className="askhub-top-banner__inner">
               <span className="askhub-top-banner__emoji" aria-hidden>
          {E_CHART}
        </span>
        <span>
          AskHub Console · שליטה מלאה במודרציה, בתוכן ובמשתמשים — ממשק נקי, מהיר ומדויק
        </span>
        <span className="askhub-top-banner__emoji" aria-hidden>
          {E_SPARK}
        </span>
      </div>
    </div>
  )
}
