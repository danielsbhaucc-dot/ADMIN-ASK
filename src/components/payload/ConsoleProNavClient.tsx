'use client'

import { getTranslation } from '@payloadcms/translations'
import {
  BrowseByFolderButton,
  Link,
  useConfig,
  usePreferences,
  useTranslation,
} from '@payloadcms/ui'
import type { NavGroupType } from '@payloadcms/ui/shared'
import { EntityType } from '@payloadcms/ui/shared'
import {
  ChevronDown,
  FileText,
  History,
  MessageSquare,
  Settings,
  ShieldAlert,
  ShieldCheck,
  UserCircle,
  Users,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import { PREFERENCE_KEYS } from 'payload/shared'
import { formatAdminURL } from 'payload/shared'
import React, { useCallback, useMemo, useState } from 'react'

export type NavPrefs = { groups?: Record<string, { open?: boolean }> } | null

type Props = {
  groups: NavGroupType[]
  navPreferences: NavPrefs
  userEmail: string
  userName: string
  controls: React.ReactNode
}

function groupIcon(label: string) {
  const t = label.toLowerCase()
  if (t.includes('מערכת') || t.includes('system')) return Settings
  if (t.includes('משתמש')) return Users
  if (t.includes('תוכן') || t.includes('content')) return FileText
  if (t.includes('מודרציה') || t.includes('moderation')) return ShieldAlert
  if (t.includes('הודע')) return MessageSquare
  if (t.includes('היסטור')) return History
  if (t.includes('חברתי')) return UserCircle
  return FileText
}

export function ConsoleProNavClient({
  groups,
  navPreferences,
  userEmail,
  userName,
  controls,
}: Props) {
  const pathname = usePathname()
  const { setPreference } = usePreferences()
  const {
    config: {
      admin: {
        routes: { browseByFolder: foldersRoute },
      },
      folders: foldersRaw,
      routes: { admin: adminRoute },
    },
  } = useConfig()

  const foldersEnabled =
    foldersRaw && typeof foldersRaw === 'object' && foldersRaw.browseByFolder === true
  const { i18n } = useTranslation()

  const folderURL = useMemo(
    () =>
      formatAdminURL({
        adminRoute,
        path: foldersRoute,
      }),
    [adminRoute, foldersRoute],
  )
  const viewingRootFolderView = pathname.startsWith(folderURL)

  const initialOpen = useCallback(
    (label: string) => {
      const v = navPreferences?.groups?.[label]?.open
      if (v === undefined) return true
      return v !== false
    },
    [navPreferences?.groups],
  )

  const [expanded, setExpanded] = useState<Record<string, boolean>>(() => {
    const o: Record<string, boolean> = {}
    for (const g of groups) {
      o[g.label] = initialOpen(g.label)
    }
    return o
  })

  const toggleGroup = (label: string) => {
    setExpanded((prev) => {
      const nextOpen = !prev[label]
      setPreference(
        PREFERENCE_KEYS.NAV,
        {
          groups: {
            ...(navPreferences?.groups ?? {}),
            [label]: { open: nextOpen },
          },
        },
        true,
      )
      return { ...prev, [label]: nextOpen }
    })
  }

  const avatarSrc =
    userEmail !== ''
      ? `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(userEmail)}&backgroundColor=c0aede`
      : undefined

  return (
    <div className="relative flex h-full min-h-0 flex-1 flex-col bg-[#0B1121] text-slate-800">
      <div className="pointer-events-none absolute top-0 right-0 z-0 h-64 w-full bg-blue-600/10 blur-[60px]" />

      <div className="relative z-10 flex h-24 shrink-0 items-center border-b border-white/10 px-6">
        <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-[0_0_20px_rgba(56,189,248,0.4)]">
          <ShieldCheck className="text-white" size={26} strokeWidth={2.5} />
        </div>
        <div>
          <h1 className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-xl font-extrabold tracking-tight text-transparent">
            AskHub
          </h1>
          <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
            Console Pro
          </p>
        </div>
      </div>

      <nav className="relative z-10 flex min-h-0 flex-1 flex-col overflow-y-auto px-4 py-8">
        {foldersEnabled ? (
          <div className="mb-3">
            <BrowseByFolderButton active={viewingRootFolderView} />
          </div>
        ) : null}

        <div className="space-y-2">
          {groups.map((group) => {
            const Icon = groupIcon(group.label)
            const isExpanded = expanded[group.label] ?? true
            const labelText = getTranslation(group.label, i18n)

            return (
              <div key={group.label} className="mb-2">
                <button
                  type="button"
                  onClick={() => toggleGroup(group.label)}
                  className={`flex w-full items-center justify-between rounded-xl p-3.5 font-medium transition-all duration-300 ${
                    isExpanded
                      ? 'bg-white/5 text-white'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className={
                        group.label.includes('משתמש')
                          ? 'text-emerald-500'
                          : group.label.includes('תוכן')
                            ? 'text-amber-500'
                            : group.label.includes('מודרציה')
                              ? 'text-rose-500'
                              : isExpanded
                                ? 'text-cyan-400'
                                : 'text-slate-500'
                      }
                    />
                    <span>{labelText}</span>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180 text-cyan-400' : ''}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[2000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="relative space-y-1 pr-4">
                    <div className="absolute right-0 top-0 bottom-0 w-0.5 rounded-full bg-slate-800" />
                    {group.entities.map((ent, i) => {
                      let href: string
                      let id: string
                      if (ent.type === EntityType.collection) {
                        href = formatAdminURL({
                          adminRoute,
                          path: `/collections/${ent.slug}`,
                        })
                        id = `nav-${ent.slug}`
                      } else {
                        href = formatAdminURL({
                          adminRoute,
                          path: `/globals/${ent.slug}`,
                        })
                        id = `nav-global-${ent.slug}`
                      }
                      const isActive =
                        pathname.startsWith(href) &&
                        ['/', undefined].includes(pathname[href.length] as '/' | undefined)
                      const entLabel = getTranslation(ent.label, i18n)

                      const linkClass = `relative flex items-center gap-3 rounded-xl py-3 px-4 text-sm ${
                        isActive
                          ? 'bg-gradient-to-r from-cyan-500/10 to-transparent font-semibold text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`

                      if (pathname === href) {
                        return (
                          <div key={`${ent.slug}-${i}`} id={id} className={linkClass}>
                            <div className="absolute right-0 top-2 h-10 w-0.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                            <span className="relative">{entLabel}</span>
                          </div>
                        )
                      }

                      return (
                        <Link
                          key={`${ent.slug}-${i}`}
                          id={id}
                          href={href}
                          prefetch={false}
                          className={linkClass}
                        >
                          {isActive ? (
                            <div className="absolute right-0 top-2 h-10 w-0.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                          ) : null}
                          <span className="relative">{entLabel}</span>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </nav>

      <div className="relative z-10 shrink-0 border-t border-white/10 bg-black/20 p-5 backdrop-blur-md">
        <div className="flex cursor-pointer items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/5">
          <div className="relative">
            {avatarSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={avatarSrc}
                alt=""
                className="h-11 w-11 rounded-full border-2 border-indigo-500 object-cover"
              />
            ) : (
              <div className="h-11 w-11 rounded-full border-2 border-indigo-500 bg-slate-600" />
            )}
            <div className="absolute bottom-0 left-0 h-3.5 w-3.5 rounded-full border-2 border-[#0B1121] bg-emerald-500" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-white">{userName}</p>
            <p className="truncate text-xs font-medium text-indigo-400">{userEmail || 'מנהל מערכת'}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-slate-400 [&_svg]:text-slate-500 hover:[&_svg]:text-white">
            {controls}
          </div>
        </div>
      </div>
    </div>
  )
}
