import { Link } from 'react-router-dom'

export default function BookNowButton({ className = '' }) {
  return (
    <Link
      to="/book-now"
      className={`inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-brand-dark hover:shadow-lg ${className}`}
    >
      Book Now
    </Link>
  )
}
