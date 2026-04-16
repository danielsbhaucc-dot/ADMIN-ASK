import { Logout } from '@payloadcms/ui'
import { RenderServerComponent } from '@payloadcms/ui/elements/RenderServerComponent'
import { EntityType, groupNavItems, type EntityToGroup } from '@payloadcms/ui/shared'
import { NavHamburger } from '@payloadcms/next/client'
import type { PayloadRequest, SanitizedCollectionConfig, SanitizedGlobalConfig, ServerProps } from 'payload'
import React from 'react'

import { ConsoleProNavClient, type NavPrefs } from './ConsoleProNavClient'
import { ConsoleProNavShell } from './ConsoleProNavShell'
import { getNavPrefs } from './internals/getNavPrefs'
import { SettingsMenuButton } from './internals/SettingsMenuButton'

export type ConsoleProNavProps = {
  req?: PayloadRequest
} & ServerProps

export default async function ConsoleProNav(props: ConsoleProNavProps) {
  const {
    documentSubViewType,
    i18n,
    locale,
    params,
    payload,
    permissions,
    req,
    searchParams,
    user,
    viewType,
    visibleEntities,
  } = props

  if (!payload?.config || !permissions) {
    return null
  }

  const {
    admin: {
      components: {
        afterNav,
        afterNavLinks,
        beforeNav,
        beforeNavLinks,
        logout,
        settingsMenu,
      },
    },
    collections,
    globals,
  } = payload.config

  const visible = visibleEntities ?? {
    collections: [] as string[],
    globals: [] as string[],
  }

  const toGroup: EntityToGroup[] = [
    ...collections
      .filter(({ slug }: SanitizedCollectionConfig) => visible.collections.includes(slug))
      .map(
        (collection: SanitizedCollectionConfig): EntityToGroup => ({
          type: EntityType.collection,
          entity: collection,
        }),
      ),
    ...globals
      .filter(({ slug }: SanitizedGlobalConfig) => visible.globals.includes(slug))
      .map(
        (global: SanitizedGlobalConfig): EntityToGroup => ({
          type: EntityType.global,
          entity: global,
        }),
      ),
  ]

  const groups = groupNavItems(toGroup, permissions, i18n)

  const navPreferences = (await getNavPrefs(req)) as NavPrefs

  const LogoutComponent = RenderServerComponent({
    clientProps: { documentSubViewType, viewType },
    Component: logout?.Button,
    Fallback: Logout,
    importMap: payload.importMap,
    serverProps: {
      i18n,
      locale,
      params,
      payload,
      permissions,
      searchParams,
      user,
    },
  })

  const RenderedSettingsMenu =
    settingsMenu && Array.isArray(settingsMenu)
      ? settingsMenu.map((item, index) =>
          RenderServerComponent({
            clientProps: { documentSubViewType, viewType },
            Component: item,
            importMap: payload.importMap,
            key: `settings-menu-item-${index}`,
            serverProps: {
              i18n,
              locale,
              params,
              payload,
              permissions,
              searchParams,
              user,
            },
          }),
        )
      : []

  const RenderedBeforeNav = RenderServerComponent({
    clientProps: { documentSubViewType, viewType },
    Component: beforeNav,
    importMap: payload.importMap,
    serverProps: {
      i18n,
      locale,
      params,
      payload,
      permissions,
      searchParams,
      user,
    },
  })

  const RenderedBeforeNavLinks = RenderServerComponent({
    clientProps: { documentSubViewType, viewType },
    Component: beforeNavLinks,
    importMap: payload.importMap,
    serverProps: {
      i18n,
      locale,
      params,
      payload,
      permissions,
      searchParams,
      user,
    },
  })

  const RenderedAfterNavLinks = RenderServerComponent({
    clientProps: { documentSubViewType, viewType },
    Component: afterNavLinks,
    importMap: payload.importMap,
    serverProps: {
      i18n,
      locale,
      params,
      payload,
      permissions,
      searchParams,
      user,
    },
  })

  const RenderedAfterNav = RenderServerComponent({
    clientProps: { documentSubViewType, viewType },
    Component: afterNav,
    importMap: payload.importMap,
    serverProps: {
      i18n,
      locale,
      params,
      payload,
      permissions,
      searchParams,
      user,
    },
  })

  const u = user && typeof user === 'object' ? (user as { email?: string }) : null
  const userEmail = u?.email ?? ''
  const userName = userEmail !== '' ? userEmail.split('@')[0] ?? 'משתמש' : 'משתמש'

  const baseClass = 'nav'

  return (
    <ConsoleProNavShell baseClass={baseClass}>
      {RenderedBeforeNav}
      <nav className={`${baseClass}__wrap flex h-full min-h-0 flex-1 flex-col`}>
        {RenderedBeforeNavLinks}
        <ConsoleProNavClient
          groups={groups}
          navPreferences={navPreferences}
          userEmail={userEmail}
          userName={userName}
          controls={
            <>
              <SettingsMenuButton settingsMenu={RenderedSettingsMenu} />
              {LogoutComponent}
            </>
          }
        />
        {RenderedAfterNavLinks}
      </nav>
      {RenderedAfterNav}
      <div className={`${baseClass}__header`}>
        <div className={`${baseClass}__header-content`}>
          <NavHamburger baseClass={baseClass} />
        </div>
      </div>
    </ConsoleProNavShell>
  )
}
