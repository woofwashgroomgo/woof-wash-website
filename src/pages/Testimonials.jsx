import BookNowButton from '../components/BookNowButton.jsx'
import testimonialDogs from '../assets/testimonial-dogs.png'

const testimonials = [
  {
    quote:
      'We have taken our dogs to many wonderful groomers but Karen is hands down the best that we have used. She goes above and beyond the typical grooming experience to make sure both our dogs and we are fully happy throughout the process. We send all of our friends and family to Karen. Not only does she do a superior job but there is tremendous value in her rates.',
    author: 'Greg and Lisa E.',
  },
  {
    quote:
      'I am so happy and relieved to have found Karen. After years of trying dozens of groomers, I finally was told about Karen. Perfect for how I want my dogs to be treated. There are no kennels and they get immediate attention. Besides my dogs being groomed so beautifully, they are in a peaceful environment which I feel, is less stressful for them. Very, very happy with her services.',
    author: 'Shila C.',
  },
  {
    quote:
      'Our little Shadow is very difficult when it comes to grooming. Karen has the patience and kindness to deal with him where other groomers would not even bother. We look forward to taking him to her because she does such a wonderful job. Shadow always comes home looking beautiful!',
    author: 'Bri R. and Maloree G.',
  },
  {
    quote:
      'We highly recommend Karen as a dog groomer. We take our two dogs to her and all our friends comment on how cute their cuts look. Most importantly the dogs are happy and content when we pick them up.',
    author: 'Sandy B. & Sue P.',
  },
]

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
