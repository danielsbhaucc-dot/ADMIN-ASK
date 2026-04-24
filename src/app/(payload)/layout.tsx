import React from 'react'
import config from '../../payload.config'

import '@payloadcms/next/css'

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  )
}
