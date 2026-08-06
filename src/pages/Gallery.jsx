import BookNowButton from '../components/BookNowButton.jsx'
import { photos } from '../data/gallery.js'

export default function Gallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold text-brand">Gallery</h1>
      <p className="mt-4 text-center text-lg text-gray-700">
        A few satisfied clients (and their owners are happy too!)
      </p>

      <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
        {photos.map((photo) => (
          <figure
            key={photo.name}
            className="mb-6 break-inside-avoid overflow-hidden rounded-xl shadow-md"
          >
            <div className="flex items-end justify-center bg-gradient-to-b from-brand-blue to-[#7fd4f5] px-5 pt-5">
              <img
                src={photo.src}
                alt={`${photo.name} after grooming`}
                loading="lazy"
                className="w-full drop-shadow-[0_10px_14px_rgba(20,30,60,0.35)]"
              />
            </div>
            <figcaption className="bg-brand px-4 py-2 text-center font-semibold text-white">
              {photo.name}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-8 text-center">
        <BookNowButton />
      </div>
    </section>
  )
}
