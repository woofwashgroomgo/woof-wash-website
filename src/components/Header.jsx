import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/meet-the-groomer', label: 'Meet The Groomer' },
  { to: '/services', label: 'Services' },
  { to: '/testimonials', label: 'Testimonials' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/book-now', label: 'Book Now' },
]

function linkClasses({ isActive }) {
  return [
    'block px-3 py-2 font-semibold tracking-wide transition-colors',
    isActive
      ? 'text-brand underline decoration-brand-blue decoration-4 underline-offset-8'
      : 'text-gray-600 hover:text-brand',
  ].join(' ')
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Woof Wash Groom & Go logo" className="h-14 w-auto" />
          <span className="hidden text-sm font-medium text-gray-500 lg:block">
            Professional Dog Grooming Services in Long Beach, CA
          </span>
        </Link>

        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className={linkClasses}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-brand md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-gray-100 bg-white md:hidden" aria-label="Mobile navigation">
          <ul className="px-4 py-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className={linkClasses} onClick={() => setOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
