import BookNowButton from '../components/BookNowButton.jsx'
import testimonialDogs from '../assets/testimonial-dogs.png'
import { testimonials } from '../data/testimonials.js'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold text-brand">Testimonials</h1>
      <img
        src={testimonialDogs}
        alt="Woof Wash Groom & Go cartoon dog with grooming scissors and comb"
        className="mx-auto mt-6 w-64"
      />

      <div className="mt-10 space-y-8">
        {testimonials.map((t) => (
          <blockquote
            key={t.author}
            className="rounded-xl border-l-4 border-brand-blue bg-brand-blue-light/50 p-6 shadow-sm"
          >
            <p className="text-lg italic leading-relaxed text-gray-700">
              &ldquo;{t.quote}&rdquo;
            </p>
            <footer className="mt-4 font-bold text-brand">&mdash; {t.author}</footer>
          </blockquote>
        ))}
      </div>

      <div className="mt-10 text-center">
        <BookNowButton />
      </div>
    </section>
  )
}
