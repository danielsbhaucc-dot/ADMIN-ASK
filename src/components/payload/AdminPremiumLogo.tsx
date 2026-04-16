import React from 'react'

export default function AdminPremiumLogo() {
  return (
    <div className="askhub-console-brand" dir="rtl">
      <div className="askhub-console-brand__mark" aria-hidden>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m9 12 2 2 4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="askhub-console-brand__text">
        <div className="askhub-console-brand__title">AskHub</div>
        <div className="askhub-console-brand__subtitle">Console Pro</div>
      </div>
    </div>
  )
}
