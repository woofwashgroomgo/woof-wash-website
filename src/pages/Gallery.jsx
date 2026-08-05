import BookNowButton from '../components/BookNowButton.jsx'
import brody from '../assets/gallery-brody.jpg'
import prince from '../assets/gallery-prince.jpg'
import jakeAndKoa from '../assets/gallery-jake-and-koa.jpg'
import ellie from '../assets/gallery-ellie.jpg'
import ruby from '../assets/gallery-ruby.jpg'
import zeke from '../assets/gallery-zeke.jpg'
import gracie from '../assets/gallery-gracie.jpg'
import merlinAndPrince from '../assets/gallery-merlin-and-prince.jpg'
import buddy from '../assets/gallery-buddy.jpg'

const photos = [
  { src: brody, name: 'Brody' },
  { src: prince, name: 'Prince' },
  { src: jakeAndKoa, name: 'Jake and Koa' },
  { src: ellie, name: 'Ellie' },
  { src: ruby, name: 'Ruby' },
  { src: zeke, name: 'Zeke' },
  { src: gracie, name: 'Gracie' },
  { src: merlinAndPrince, name: 'Merlin & Prince' },
  { src: buddy, name: 'Buddy' },
]

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
            <img
              src={photo.src}
              alt={`${photo.name} after grooming`}
              loading="lazy"
              className="w-full"
            />
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
