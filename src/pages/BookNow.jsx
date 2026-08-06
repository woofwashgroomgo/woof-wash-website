import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants.js'

const inputClasses =
  'w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40'

function encode(data) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
}

function SectionHeading({ children }) {
  return (
    <h3 className="border-b-2 border-brand-blue pb-1 text-xl font-bold text-brand sm:col-span-2">
      {children}
    </h3>
  )
}

export default function BookNow() {
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  async function handleSubmit(event) {
    event.preventDefault()
    setStatus('submitting')
    const formData = Object.fromEntries(new FormData(event.target))
    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'new-client', ...formData }),
      })
      if (!res.ok) throw new Error(`Form POST failed: ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold text-brand">Book Now</h1>

      <div className="mt-8 rounded-xl bg-brand-blue-light p-8 text-center shadow-sm">
        <h2 className="text-2xl font-bold text-brand">
          Is your dog looking scruffy and ready for a spa day?
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          Call or text Karen at{' '}
          <a href={`tel:${PHONE_TEL}`} className="font-bold text-brand underline decoration-brand-blue underline-offset-4">
            {PHONE_DISPLAY}
          </a>{' '}
          to book your appointment.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-4">
          <a
            href={`tel:${PHONE_TEL}`}
            className="rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-brand-dark"
          >
            Call Karen
          </a>
          <a
            href={`sms:${PHONE_TEL}`}
            className="rounded-full bg-brand-blue px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition hover:opacity-90"
          >
            Text Karen
          </a>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold text-brand">New Client Information Form</h2>
        <p className="mt-2 text-gray-700">
          If you are a new client, please fill out the New Client Information Form
          below.
        </p>

        {status === 'success' ? (
          <div className="mt-6 rounded-lg border border-brand-lime bg-green-50 p-6 text-center">
            <p className="text-lg font-semibold text-brand">
              Thanks! Your information has been sent. 🐾
            </p>
            <p className="mt-2 text-gray-700">
              Karen will be in touch soon &mdash; or call/text her at {PHONE_DISPLAY}.
            </p>
          </div>
        ) : (
          <form
            name="new-client"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="mt-6 grid gap-5 sm:grid-cols-2"
          >
            <input type="hidden" name="form-name" value="new-client" />
            <p className="hidden">
              <label>
                Don&rsquo;t fill this out if you&rsquo;re human:{' '}
                <input name="bot-field" />
              </label>
            </p>

            <SectionHeading>Owner&rsquo;s Information</SectionHeading>
            <label className="block sm:col-span-2">
              <span className="mb-1 block font-semibold text-gray-700">Name</span>
              <input type="text" name="owner-name" placeholder="Name" className={inputClasses} />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Email Address</span>
              <input type="email" name="email" placeholder="Email Address" className={inputClasses} />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Phone Number</span>
              <input type="tel" name="phone" placeholder="Phone Number" className={inputClasses} />
            </label>

            <SectionHeading>Name of Person Who Referred You</SectionHeading>
            <label className="block sm:col-span-2">
              <span className="mb-1 block font-semibold text-gray-700">Name</span>
              <input type="text" name="referrer-name" placeholder="Name" className={inputClasses} />
            </label>

            <SectionHeading>Client&rsquo;s Information (your dog)</SectionHeading>
            <label className="block sm:col-span-2">
              <span className="mb-1 block font-semibold text-gray-700">Name</span>
              <input type="text" name="dog-name" placeholder="Name" className={inputClasses} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block font-semibold text-gray-700">Breed</span>
              <input type="text" name="breed" placeholder="Breed" className={inputClasses} />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Age</span>
              <input type="number" name="age" step="any" min="0" placeholder="Age" className={inputClasses} />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Weight</span>
              <input type="number" name="weight" step="any" min="0" placeholder="Weight" className={inputClasses} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block font-semibold text-gray-700">
                Concerns (allergies, behavioral issues, temperament, etc.)
              </span>
              <textarea
                name="concerns"
                rows="6"
                placeholder="Concerns (allergies, behavioral issues, temperament, etc.)"
                className={inputClasses}
              />
            </label>

            <SectionHeading>Our Client Agreement</SectionHeading>
            <p className="text-gray-700 sm:col-span-2">
              By checking the checkbox below, you agree that you have read and accept
              our new client agreement. To review our client agreement:{' '}
              <Link
                to="/client-agreement"
                className="font-semibold text-brand underline decoration-brand-blue underline-offset-4 hover:text-brand-dark"
              >
                click here
              </Link>
              .
            </p>
            <div className="sm:col-span-2">
              <p className="font-semibold text-gray-700">
                Please acknowledge you have read and accept the client agreement
                <span className="text-red-600">*</span>
              </p>
              <label className="mt-2 flex items-center gap-3">
                <input
                  type="checkbox"
                  name="agreement"
                  value="Yes, I accept the agreement"
                  required
                  className="h-5 w-5 accent-brand"
                />
                <span className="text-gray-700">Yes, I accept the agreement</span>
              </label>
            </div>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-brand-dark disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Submit My Form'}
              </button>
              {status === 'error' && (
                <p className="mt-3 text-red-600">
                  Sorry, something went wrong sending the form. Please call or text
                  Karen at {PHONE_DISPLAY} instead.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
