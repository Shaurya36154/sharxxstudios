import { HeadContent, Scripts, createRootRoute, Link } from '@tanstack/react-router'
import { Outlet } from '@tanstack/react-router'
import { useState } from 'react'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Sharxx Display',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function SiteNav() {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/' as const, label: 'Home' },
    { to: '/projects' as const, label: 'Work' },
    { to: '/resume' as const, label: 'Resume' },
    { to: '/contact' as const, label: 'Contact' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/80 backdrop-blur-md border-b border-white/10">
      <Link to="/" className="text-xl font-black tracking-widest text-white uppercase hover:text-amber-400 transition-colors">
        Sharxx<span className="text-amber-400">.</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-amber-400 transition-colors"
            activeProps={{ className: 'text-amber-400' }}
          >
            {l.label}
          </Link>
        ))}
      </div>
      <button
        className="md:hidden text-white/70 hover:text-white"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 flex flex-col py-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-6 py-3 text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-amber-400 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-[#080808] text-white">
        <SiteNav />
        <main className="pt-[65px]">
          <Outlet />
        </main>
        <Scripts />
      </body>
    </html>
  )
}
