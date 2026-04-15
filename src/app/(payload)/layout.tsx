import configPromise from '../../payload.config'
import { RootLayout } from '@payloadcms/next/layouts'
import '@payloadcms/next/css'
import React from 'react'
import { importMap } from './importMap'

type Args = {
  children: React.ReactNode
}

export default function Layout({ children }: Args) {
  return (
    <RootLayout config={configPromise} importMap={importMap}>
      {children}
    </RootLayout>
  )
}