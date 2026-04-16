'use client'

import { useNav } from '@payloadcms/ui'
import React from 'react'

type Props = {
  baseClass: string
  children: React.ReactNode
}

/** עוטף כמו NavWrapper של Payload, עם מחלקה לעיצוב Tailwind */
export function ConsoleProNavShell({ baseClass, children }: Props) {
  const { hydrated, navOpen, navRef, shouldAnimate } = useNav()
  const classes = [
    baseClass,
    navOpen && `${baseClass}--nav-open`,
    shouldAnimate && `${baseClass}--nav-animate`,
    hydrated && `${baseClass}--nav-hydrated`,
    'askhub-console-aside',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <aside className={classes} inert={!navOpen ? true : undefined}>
      <div className={`${baseClass}__scroll`} ref={navRef}>
        {children}
      </div>
    </aside>
  )
}
