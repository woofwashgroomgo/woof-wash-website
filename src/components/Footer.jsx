import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants.js'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center">
        <p className="text-lg font-bold">Woof Wash Groom &amp; Go</p>
        <p className="text-sm text-purple-200">
          Professional Dog Grooming Services in Long Beach, CA
        </p>
        <p className="text-sm">
          Call or text Karen at{' '}
          <a href={`tel:${PHONE_TEL}`} className="font-semibold text-brand-blue hover:underline">
            {PHONE_DISPLAY}
          </a>
        </p>
        <Link to="/book-now" className="text-sm font-semibold text-brand-lime hover:underline">
          Book Now
        </Link>
        <p className="mt-2 text-xs text-purple-300">
          Copyright &copy; {new Date().getFullYear()} Woof Wash Groom &amp; Go
        </p>
      </div>
    </footer>
  )
}
