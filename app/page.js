import CTAButtons from './components/CTAButtons';
import PageShell from './components/PageShell';

const serviceHighlights = [
  'Signature Manicures',
  'Spa Pedicures',
  'Gel Nail Perfection',
  'Acrylic Enhancements',
  'Custom Nail Art',
  'Relaxing Spa Treatments',
  'Lash & Brow Beauty',
];

const reasons = [
  'Licensed beauty professionals with precision artistry',
  'Sterilized tools, clean stations, and premium products',
  'Warm, welcoming service with personalized recommendations',
  'Comfort-first experience in a polished boutique setting',
];

const testimonials = [
  {
    quote:
      'I absolutely love getting a mani and pedi here. Helen provides the best gel manicures. The manicures typically last 3 weeks and I always get compliments on how nice my nails look!
',
    name: 'Five Stars',
  },
  {
    quote:
      'Today was my first visit to Beauty Image Spa. I received a warm, delightful welcome. The atmosphere is bright and space is clean and organized. I did not have an appointment. I was matched with Lina who gave me the most beautiful gel manicure. I have thin brittle nails and was offered nail hardener. I’m so pleased and happy with the outcome. Lina’s work is absolutely meticulous. I am looking forward to my next visit. Thank you!',
    name: 'Five Stars',
  },
  {
    quote:
      'Awesome experience, Great service! Book your appointment now you won’t regret it 🎉 I got Holiday Heart nails and loved them 💗 My feet feel super soft after the Russian pedicure and the tech did a great job 👏',
    name: 'Five Stars',
  },
];

const galleryPlaceholders = [
  'Elegant French manicure close-up',
  'Soft pink gel nails with glossy finish',
  'Luxury spa pedicure setup',
  'Custom nail art design with gold accents',
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Luxury Nail Salon & Beauty Spa</p>
            <h1>Where Elegance Meets Expert Beauty Care</h1>
            <p className="hero-subheadline">
              At Beauty Image Spa, we create polished, confidence-boosting looks
              with meticulous care in a clean and sophisticated space.
            </p>
            <CTAButtons />
          </div>
          <div className="hero-card" aria-hidden="true">
            {/* Replace with professional hero image */}
            <div className="placeholder-image large">
              Featured salon photo placeholder
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container trust-card">
          <h2>Refined Beauty. Trusted Results.</h2>
          <p>
            We blend artistry, hygiene, and premium products to deliver beautiful
            nails and beauty services you can feel good about.
          </p>
        </div>
      </section>

      <section className="section-brown" id="services-preview">
        <div className="container">
          <h2>Services Designed for Your Signature Style</h2>
          <div className="service-grid">
            {serviceHighlights.map((service) => (
              <article key={service} className="service-card">
                <h3>{service}</h3>
                <p>
                  Tailored service with premium attention to detail and long-lasting
                  results.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <h2>Why Choose Beauty Image Spa</h2>
          <ul className="reason-list">
            {reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-rose">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="review-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="review-card">
                <p>“{testimonial.quote}”</p>
                <cite>{testimonial.name}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <h2>Gallery Preview</h2>
          <div className="gallery-grid">
            {galleryPlaceholders.map((label) => (
              <div key={label} className="placeholder-image" role="img" aria-label={label}>
                {/* Replace placeholder boxes with actual portfolio images */}
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-brown">
        <div className="container location-grid">
          <div>
            <h2>Visit Our Spa</h2>
            {/* Replace with final location details */}
            <p>123 Elegance Avenue, Suite 7, Springfield, ST 12345</p>
            <p>Call: (555) 123-4567</p>
          </div>
          <div>
            <h3>Business Hours</h3>
            {/* Replace with final operating hours */}
            <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Ready to Feel Beautifully Polished?</h2>
          <p>
            Book your next appointment at Beauty Image Spa and enjoy expert care
            in a luxurious, relaxing environment.
          </p>
          <CTAButtons />
        </div>
      </section>
    </PageShell>
  );
}
