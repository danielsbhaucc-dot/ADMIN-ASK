import React from 'react'
import { initAdmin } from '@payloadcms/next/utilities'
import config from '../../payload.config'

import '@payloadcms/next/css'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => {
  return (
    <html lang="he" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  )
}

export default initAdmin({ config, RootLayout: Layout })
