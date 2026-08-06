import { useEffect, useState } from 'react'
import { testimonials } from '../data/testimonials.js'

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      7000,
    )
    return () => clearInterval(timer)
  }, [paused])

  const current = testimonials[index]
  const go = (i) => setIndex((i + testimonials.length) % testimonials.length)

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-stretch gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous testimonial"
          className="shrink-0 self-center rounded-full p-2 text-2xl font-bold text-brand hover:bg-brand-blue-light"
        >
          &#8249;
        </button>
        <blockquote
          key={index}
          className="flex-1 rounded-xl border-l-4 border-brand-blue bg-brand-blue-light/50 p-6 text-left shadow-sm"
          aria-live="polite"
        >
          <p className="text-lg italic leading-relaxed text-gray-700">
            &ldquo;{current.quote}&rdquo;
          </p>
          <footer className="mt-4 font-bold text-brand">&mdash; {current.author}</footer>
        </blockquote>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next testimonial"
          className="shrink-0 self-center rounded-full p-2 text-2xl font-bold text-brand hover:bg-brand-blue-light"
        >
          &#8250;
        </button>
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {testimonials.map((t, i) => (
          <button
            key={t.author}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show testimonial ${i + 1}`}
            aria-current={i === index}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? 'bg-brand' : 'bg-gray-300 hover:bg-brand-blue'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
