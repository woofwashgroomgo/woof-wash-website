import BookNowButton from '../components/BookNowButton.jsx'
import karenAndDog from '../assets/karen-and-dog.jpg'
import signature from '../assets/capture-1.png'

export default function MeetTheGroomer() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold text-brand">Meet the Groomer</h1>

      <div className="mt-10 grid items-start gap-10 md:grid-cols-2">
        <img
          src={karenAndDog}
          alt="Karen holding a freshly groomed dog"
          className="mx-auto w-full max-w-md rounded-xl shadow-lg md:sticky md:top-24"
        />
        <div className="space-y-5 text-lg leading-relaxed text-gray-700">
          <p>
            I&rsquo;m Karen. A few years ago, I left the medical field and trained to
            become a professional dog groomer. I began working in salons, but
            didn&rsquo;t like the atmosphere &amp; assembly line mentality &mdash; get
            them in, get them out!
          </p>
          <p>
            At most salons, your dog will be handled by 3&ndash;4 different people,
            surrounded by other unfamiliar (sometimes loudly barking) dogs, and then
            put in a crate, while waiting to be picked up by their owner.
          </p>
          <p>
            Instead, I provide professional, one-on-one grooming with special
            attention to detail in a peaceful, crate-free, stress-free environment.
            The result is a calmer, clean, good-looking dog!
          </p>
          <p>
            One of my favorite things about dog grooming is meeting new dogs and
            learning their &ldquo;dogality.&rdquo; (Yes, &ldquo;dogality,&rdquo; not
            &ldquo;personality!&rdquo;) Since each and every dog is different, I enjoy
            the challenge of tweaking the grooming experience to meet the dog&rsquo;s
            needs and temperament.
          </p>
          <p>
            I strive to make sure that every dog and his or her owner feel happy,
            comfortable and want to come back again and again.
          </p>
          <img src={signature} alt="Karen R." className="h-10 w-auto" />
          <BookNowButton />
        </div>
      </div>
    </section>
  )
}
