'use client'

import {
  Activity,
  Edit3,
  MoreHorizontal,
  Plus,
  Search,
  ShieldAlert,
  Star,
  TrendingDown,
  TrendingUp,
  UserCircle,
  Users,
} from 'lucide-react'
import React, { useState } from 'react'

const stats = [
  {
    id: 1,
    title: '\u05e1\u05d4\u05f4\u05db \u05de\u05e9\u05ea\u05de\u05e9\u05d9\u05dd',
    value: '12,450',
    trend: '+12.5%',
    isUp: true,
    gradient: 'from-blue-500 to-cyan-400',
    shadow: 'shadow-cyan-500/20',
    icon: Users,
  },
  {
    id: 2,
    title: 'משתמשים פעילים (היום)',
    value: '1,204',
    trend: '+5.2%',
    isUp: true,
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/20',
    icon: Activity,
  },
  {
    id: 3,
    title: 'הפרות תוכן פתוחות',
    value: '28',
    trend: '-2.4%',
    isUp: false,
    gradient: 'from-rose-500 to-pink-500',
    shadow: 'shadow-rose-500/20',
    icon: ShieldAlert,
  },
] as const

function getStatusBadge(status: string) {
  switch (status) {
    case 'verified':
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
          מאומת
        </span>
      )
    case 'pending':
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs font-bold text-amber-600">
          <span className="h-2 w-2 rounded-full bg-amber-500" />
          ממתין
        </span>
      )
    case 'banned':
      return (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-bold text-rose-600">
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          חסום
        </span>
      )
    default:
      return null
  }
}

export default function AdminPremiumBeforeDashboard() {
  const [users] = useState(() => [
    {
      id: 1,
      email: 'danielsbhaucc@gmail.com',
      name: 'דניאל ש.',
      role: 'Super Admin',
      updated: 'לפני שעתיים',
      created: '16/04/2026',
      status: 'verified',
      avatar:
        'https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel&backgroundColor=c0aede',
    },
    {
      id: 2,
      email: 'new_user99@askhub.co.il',
      name: 'משתמש חדש',
      role: 'משתמש רגיל',
      updated: 'לפני 5 דקות',
      created: '16/04/2026',
      status: 'pending',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex&backgroundColor=b6e3f4',
    },
    {
      id: 3,
      email: 'spammer_bot@gmail.com',
      name: 'Spam Bot',
      role: 'משתמש רגיל',
      updated: 'אתמול',
      created: '15/04/2026',
      status: 'banned',
      avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Spam&backgroundColor=ffdfbf',
    },
    {
      id: 4,
      email: 'moderator_danny@gmail.com',
      name: 'דני מודרטור',
      role: 'מנהל תוכן',
      updated: '12/04/2026',
      created: '15/03/2026',
      status: 'verified',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Danny&backgroundColor=c0aede',
    },
  ])

  return (
    <div
      dir="rtl"
      className="font-sans text-slate-800"
      style={{ fontFamily: "'Heebo', var(--font-heebo), sans-serif" }}
    >
      <div className="relative z-[1] mx-auto w-full max-w-7xl space-y-6 px-8 pb-12 pt-8">
        <div className="relative z-10 -mt-4 flex flex-col items-end justify-between gap-6 pt-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent drop-shadow-sm">
              ניהול משתמשים
            </h2>
            <p className="max-w-xl text-lg font-medium text-slate-600">
              צפייה, עריכה ומודרציה של משתמשי AskHub. השתמש במסננים כדי למצוא משתמשים ספציפיים.
            </p>
          </div>
          <button
            type="button"
            className="group flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-indigo-700 shadow-xl transition-all hover:scale-105 hover:bg-slate-50 active:scale-95"
          >
            <Plus size={20} className="text-indigo-500 transition-transform duration-300 group-hover:rotate-90" />
            הוספת משתמש
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex transform cursor-default items-center justify-between rounded-2xl border border-slate-100 bg-white p-6 shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div>
                <p className="mb-1 text-sm font-bold text-slate-500">{stat.title}</p>
                <h3 className="text-3xl font-extrabold text-slate-800">{stat.value}</h3>
                <div
                  className={`mt-2 flex items-center gap-1 text-sm font-bold ${
                    stat.isUp ? 'text-emerald-600' : 'text-rose-600'
                  }`}
                >
                  {stat.isUp ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  <span>{stat.trend} מאתמול</span>
                </div>
              </div>
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg ${stat.shadow}`}
              >
                <stat.icon size={30} strokeWidth={2.5} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
          <div className="flex flex-col items-center justify-between gap-4 border-b border-slate-100 bg-white p-6 sm:flex-row">
            <h3 className="flex items-center gap-2 text-xl font-bold text-slate-800">
              <UserCircle className="text-indigo-500" size={24} />
              רשימת משתמשים פעילה
            </h3>
            <div className="flex w-full gap-3 sm:w-auto">
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-100"
              >
                <Star size={16} className="fill-amber-500/20 text-amber-500" />
                מועדפים
              </button>
              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-bold text-slate-700 transition-all hover:bg-slate-100"
              >
                <Search size={16} className="text-slate-500" />
                סינון מתקדם
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-right">
              <thead>
                <tr className="border-b border-slate-100 bg-slate-50/80 text-sm font-bold uppercase tracking-wide text-slate-500">
                  <th className="w-16 px-6 py-5 text-center">
                    <div className="mx-auto h-5 w-5 cursor-pointer rounded border-2 border-slate-300 bg-white" />
                  </th>
                  <th className="px-6 py-5">פרטי משתמש</th>
                  <th className="px-6 py-5">תפקיד</th>
                  <th className="px-6 py-5">פעילות אחרונה</th>
                  <th className="px-6 py-5">סטטוס</th>
                  <th className="w-16 px-6 py-5">פעולות</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="group transition-colors duration-200 hover:bg-indigo-50/30"
                  >
                    <td className="px-6 py-4 text-center">
                      <div className="mx-auto h-5 w-5 cursor-pointer rounded border-2 border-slate-300 bg-white transition-colors group-hover:border-indigo-400" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-12 w-12 rounded-full border border-slate-200 shadow-sm"
                        />
                        <div>
                          <div className="text-base font-bold text-slate-900">{user.name}</div>
                          <div className="text-sm text-slate-500">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                        {user.role}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-800">{user.updated}</div>
                      <div className="text-xs text-slate-400">נוצר: {user.created}</div>
                    </td>
                    <td className="px-6 py-4">{getStatusBadge(user.status)}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 opacity-60 transition-opacity group-hover:opacity-100">
                        <button
                          type="button"
                          className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-indigo-50 hover:text-indigo-600"
                          title="\u05e2\u05e8\u05d9\u05db\u05ea \u05de\u05e9\u05ea\u05de\u05e9"
                        >
                          <Edit3 size={18} />
                        </button>
                        <button
                          type="button"
                          className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-rose-50 hover:text-rose-600"
                          title="אפשרויות נוספות"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col items-center justify-between border-t border-slate-100 bg-slate-50/50 p-5 text-sm font-medium text-slate-600 sm:flex-row">
            <div>
              {'\u05de\u05e6\u05d9\u05d2 1 \u05e2\u05d3 4 \u05de\u05ea\u05d5\u05da 12,450 \u05de\u05e9\u05ea\u05de\u05e9\u05d9\u05dd'}
            </div>
            <div className="mt-4 flex gap-2 sm:mt-0">
              <button
                type="button"
                disabled
                className="cursor-not-allowed rounded-xl border border-slate-200 bg-white px-4 py-2 font-bold text-slate-400 shadow-sm"
              >
                הקודם
              </button>
              <button
                type="button"
                className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 font-bold text-indigo-700 shadow-sm"
              >
                1
              </button>
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-bold shadow-sm transition-colors hover:bg-slate-50 hover:text-indigo-600"
              >
                2
              </button>
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-bold shadow-sm transition-colors hover:bg-slate-50 hover:text-indigo-600"
              >
                3
              </button>
              <span className="px-2 py-2 text-slate-400">...</span>
              <button
                type="button"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 font-bold shadow-sm transition-colors hover:bg-slate-50 hover:text-indigo-600"
              >
                הבא
              </button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500">
          הטבלה לעיל היא תצוגה לדוגמה בסגנון ששלחת — רשימות האוספים האמיתיות נשארות בתפריט.
        </p>
      </div>
    </div>
  )
}
