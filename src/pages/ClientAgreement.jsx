import { Link } from 'react-router-dom'

const terms = [
  'Your dog is in good health, has had all necessary vaccinations, and does not have any behavioral issues that would prevent him or her from being groomed safely.',
  'You further certify that your dog has not harmed or shown aggressive or threatening behavior towards any person or any other dog.',
  'You remain solely responsible for any harm caused by your dog while he or she is being groomed.',
  'You understand and agree that the groomer will not be liable for any problems or injuries which may develop, provided reasonable care and precautions are followed and release the groomer from any liability of any kind whatsoever arising from your dog’s grooming.',
  'I promise to do my best to provide exact service you request. However, sometimes coat condition or other factors require adjustments to the service we initially discussed. You agree to trust me to do what is in the best interest of your pet while he or she is in my care.',
  'Please know that dogs can be unpredictable. While I take precautions to ensure your pet is safe, and I never leave a dog, unsupervised, there still might be a need to seek veterinary attention. You agree to allow me or my designee to take your dog to a licensed veterinarian and to act on your behalf in the case of an emergency. You also agree to pay any costs associated with emergency care.',
  'You understand and agree that any problems which develop with your dog will be treated as deemed best by the groomer at her sole discretion and that you will assume full financial responsibility for any and all expenses involved.',
]

export default function ClientAgreement() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-center text-4xl font-extrabold text-brand">Client Agreement</h1>

      <div className="mt-8 space-y-5 leading-relaxed text-gray-700">
        <p className="font-semibold">Dear Clients:</p>
        <p>
          Thank you for trusting me with your pet. Please know I care about the
          well-being of your dog, and it is my goal is to provide you with a great
          service. To avoid any potential misunderstandings, I ask that you (the
          client) read and agree to the following:
        </p>
        {terms.map((term) => (
          <p key={term.slice(0, 40)}>{term}</p>
        ))}
        <p className="font-semibold">
          This form will apply to any and all dogs brought to the groomer by the
          signer of this agreement.
        </p>
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/book-now"
          className="inline-block rounded-full bg-brand px-8 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-md transition hover:bg-brand-dark"
        >
          Back to Book Now
        </Link>
      </div>
    </section>
  )
}
