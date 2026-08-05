import BookNowButton from '../components/BookNowButton.jsx'
import { services, pricingNote } from '../data/services.js'

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold text-brand">Services</h1>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-gray-700">
        Whether your dirty dog needs just a bath or complete grooming, I provide
        gentle, calm, one-on-one attention. Your dog will leave smelling good and
        looking great!
      </p>

      <div className="mt-12 space-y-10">
        {services.map((service) => (
          <div
            key={service.name}
            className="rounded-xl border border-gray-100 bg-brand-blue-light/40 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-bold text-brand">{service.name}</h2>
            <p className="mt-2 text-gray-600">{service.intro}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2 text-gray-700">
                  <span className="text-brand-lime" aria-hidden="true">🐾</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-10 max-w-3xl text-center text-sm italic text-gray-500">
        {pricingNote}
      </p>
      <div className="mt-8 text-center">
        <BookNowButton />
      </div>
    </section>
  )
}
