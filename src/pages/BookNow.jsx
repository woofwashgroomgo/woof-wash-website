import { useState } from 'react'
import { PHONE_DISPLAY, PHONE_TEL } from '../constants.js'

const inputClasses =
  'w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-800 focus:border-brand-blue focus:outline-none focus:ring-2 focus:ring-brand-blue/40'

function encode(data) {
  return Object.entries(data)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')
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
        <h2 className="text-2xl font-bold text-brand">New Client?</h2>
        <p className="mt-2 text-gray-700">
          If you are a new client, please fill out the New Client Information Form
          below and Karen will get back to you.
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

            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Your Name *</span>
              <input type="text" name="owner-name" required className={inputClasses} />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Phone *</span>
              <input type="tel" name="phone" required className={inputClasses} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block font-semibold text-gray-700">Email</span>
              <input type="email" name="email" className={inputClasses} />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Dog&rsquo;s Name *</span>
              <input type="text" name="dog-name" required className={inputClasses} />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Breed</span>
              <input type="text" name="breed" className={inputClasses} />
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Size</span>
              <select name="size" className={inputClasses} defaultValue="">
                <option value="" disabled>Select a size&hellip;</option>
                <option>Small (under 20 lbs)</option>
                <option>Medium (20&ndash;50 lbs)</option>
                <option>Large (50&ndash;90 lbs)</option>
                <option>Extra Large (over 90 lbs)</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1 block font-semibold text-gray-700">Service Wanted</span>
              <select name="service" className={inputClasses} defaultValue="">
                <option value="" disabled>Select a service&hellip;</option>
                <option>Just a Bath</option>
                <option>Grooming</option>
                <option>Not sure yet</option>
              </select>
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1 block font-semibold text-gray-700">
                Anything Karen should know? (temperament, coat condition, etc.)
              </span>
              <textarea name="notes" rows="4" className={inputClasses} />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-brand-dark disabled:opacity-60"
              >
                {status === 'submitting' ? 'Sending…' : 'Send to Karen'}
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
