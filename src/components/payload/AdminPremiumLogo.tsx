import React from 'react'

const E_TENT = '\uD83C\uDFD5\uFE0F'

export default function AdminPremiumLogo() {
  return (
    <div className="askhub-login-logo" dir="rtl">
      <span className="askhub-login-logo__mark" aria-hidden>
        {E_TENT}
      </span>
      <div>
        <div className="askhub-login-logo__title">AskHub</div>
        <div className="askhub-login-logo__subtitle">לוח בקרה למנהלים</div>
      </div>
    </div>
  )
}
