import { RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { importMap } from './importMap'

type Args = {
  children: React.ReactNode
}

export default function Layout({ children }: Args) {
  return <RootLayout importMap={importMap}>{children}</RootLayout>
}