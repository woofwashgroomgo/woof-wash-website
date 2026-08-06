import { Link } from 'react-router-dom'
import BookNowButton from '../components/BookNowButton.jsx'
import TestimonialCarousel from '../components/TestimonialCarousel.jsx'
import { services, pricingNote } from '../data/services.js'
import { homePreview } from '../data/gallery.js'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants.js'
import hero from '../assets/hero.png'
import karenHoldingDog from '../assets/Karen_holding_dog.png'

export default function Home() {
  return (
    <>
      <section aria-label="Welcome">
        <img
          src={hero}
          alt="Woof Wash Groom & Go — a scruffy dog wearing a purple shower cap"
          className="w-full"
        />
        <div className="bg-brand-blue-light px-4 py-10 text-center">
          <h1 className="mx-auto max-w-3xl text-2xl font-bold leading-snug text-brand md:text-3xl">
            Professional grooming in a stress-free environment for a calm, clean,
            good-looking dog!
          </h1>
          <BookNowButton className="mt-6" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14" aria-label="Services">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex flex-col rounded-xl border border-gray-100 p-6 shadow-md transition hover:shadow-lg"
            >
              <h2 className="text-2xl font-bold text-brand">{service.name}</h2>
              <p className="mt-3 text-gray-600">{service.intro}</p>
              <ul className="mt-3 flex-1 space-y-1.5">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-2 text-gray-700">
                    <span className="text-brand-lime" aria-hidden="true">🐾</span>
                    {item}
                  </li>
                ))}
              </ul>
              <BookNowButton className="mt-6 self-start" />
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-sm italic text-gray-500">
          {pricingNote}
        </p>
      </section>

      <section className="bg-brand-blue-light" aria-label="Meet the Groomer">
        <div className="mx-auto grid max-w-6xl items-center gap-x-10 px-4 pt-14 md:grid-cols-2">
          <img
            src={karenHoldingDog}
            alt="Karen holding a freshly groomed dog"
            className="order-last mx-auto mt-8 w-full max-w-md self-end drop-shadow-xl md:order-first md:mt-0"
          />
          <div className="pb-14">
            <h2 className="text-3xl font-extrabold text-brand">Meet the Groomer</h2>
            <p className="mt-4 text-gray-700">
              I&rsquo;m Karen. A few years ago, I left the medical field and trained to
              become a professional dog groomer. I began working in salons, but
              didn&rsquo;t like the atmosphere &amp; assembly line mentality &mdash; get
              them in, get them out!
            </p>
            <p className="mt-4 text-gray-700">
              Instead, I provide professional, one-on-one grooming with special
              attention to detail in a peaceful, crate-free, stress-free environment.
              The result is a calmer, clean, good-looking dog!
            </p>
            <p className="mt-4 text-gray-700">
              I strive to make sure that every dog and his or her owner feel happy,
              comfortable and want to come back again and again.
            </p>
            <Link
              to="/meet-the-groomer"
              className="mt-5 inline-block font-semibold text-brand underline decoration-brand-blue decoration-2 underline-offset-4 hover:text-brand-dark"
            >
              More about Karen &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 text-center" aria-label="Testimonials">
        <h2 className="text-3xl font-extrabold text-brand">Testimonials</h2>
        <div className="mt-8">
          <TestimonialCarousel />
        </div>
        <Link
          to="/testimonials"
          className="mt-6 inline-block font-semibold text-brand underline decoration-brand-blue decoration-2 underline-offset-4 hover:text-brand-dark"
        >
          Read all testimonials &rarr;
        </Link>
      </section>

      <section className="bg-brand-blue-light/40" aria-label="Gallery">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 className="text-3xl font-extrabold text-brand">Gallery</h2>
          <p className="mt-2 text-gray-700">
            A few satisfied clients (and their owners are happy too!)
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {homePreview.map((photo) => (
              <Link key={photo.name} to="/gallery" className="group">
                <figure className="overflow-hidden rounded-xl shadow-md transition group-hover:shadow-lg">
                  <div className="flex h-72 items-end justify-center bg-gradient-to-b from-brand-blue to-[#7fd4f5] px-5 pt-5">
                    <img
                      src={photo.src}
                      alt={`${photo.name} after grooming`}
                      loading="lazy"
                      className="max-h-full w-auto drop-shadow-[0_10px_14px_rgba(20,30,60,0.35)]"
                    />
                  </div>
                  <figcaption className="bg-brand px-4 py-2 font-semibold text-white">
                    {photo.name}
                  </figcaption>
                </figure>
              </Link>
            ))}
          </div>
          <Link
            to="/gallery"
            className="mt-8 inline-block font-semibold text-brand underline decoration-brand-blue decoration-2 underline-offset-4 hover:text-brand-dark"
          >
            See the full gallery &rarr;
          </Link>
        </div>
      </section>

      <section className="bg-brand" aria-label="Book an appointment">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Is your dog looking scruffy and ready for a spa day?
          </h2>
          <p className="mt-3 text-lg text-purple-200">
            Call or text Karen at{' '}
            <a href={`tel:${PHONE_TEL}`} className="font-bold text-white underline decoration-brand-blue underline-offset-4">
              {PHONE_DISPLAY}
            </a>{' '}
            to book your appointment.
          </p>
          <Link
            to="/book-now"
            className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-brand shadow-md transition hover:bg-brand-blue-light"
          >
            Book Now
          </Link>
        </div>
      </section>
    </>
  )
}
