'use client'

import { GearIcon, Popup, useTranslation } from '@payloadcms/ui'
import React, { Fragment } from 'react'

const baseClass = 'settings-menu-button'

type Props = {
  settingsMenu: React.ReactNode[]
}

export function SettingsMenuButton({ settingsMenu }: Props) {
  const { t } = useTranslation()

  if (!settingsMenu || settingsMenu.length === 0) {
    return null
  }

  return (
    <Popup
      button={<GearIcon ariaLabel={t('general:menu')} />}
      className={baseClass}
      horizontalAlign="left"
      id="settings-menu"
      size="small"
      verticalAlign="bottom"
    >
      {settingsMenu.map((item, i) => (
        <Fragment key={`settings-menu-item-${i}`}>{item}</Fragment>
      ))}
    </Popup>
  )
}
