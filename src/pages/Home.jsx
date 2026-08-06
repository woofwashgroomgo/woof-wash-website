import { Link } from 'react-router-dom'
import BookNowButton from '../components/BookNowButton.jsx'
import { services, pricingNote } from '../data/services.js'
import karenHoldingDog from '../assets/Karen_holding_dog.png'

export default function Home() {
  return (
    <>
      <section
        aria-label="Welcome"
        className="bg-gradient-to-br from-brand-blue to-sky-300"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[3fr_2fr] md:py-20">
          <div className="text-center md:text-left">
            <h1 className="text-5xl font-extrabold uppercase leading-tight tracking-tight text-brand md:text-6xl">
              Woof Wash
              <br />
              Groom &amp; Go
            </h1>
            <p className="mt-4 text-xl font-medium text-white drop-shadow-sm">
              Professional Dog Grooming Services in Long Beach, CA
            </p>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-dark md:mx-0">
              Professional grooming in a stress-free environment for a calm, clean,
              good-looking dog!
            </p>
            <BookNowButton className="mt-8" />
          </div>
          <img
            src={karenHoldingDog}
            alt="Karen, the groomer, holding a happy freshly groomed dog"
            className="mx-auto w-full max-w-sm drop-shadow-2xl"
          />
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
        <div className="mx-auto max-w-3xl px-4 py-14 text-center">
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
      </section>
    </>
  )
}
