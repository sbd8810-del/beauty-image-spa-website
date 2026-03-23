import PageShell from '../components/PageShell';
import CTAButtons from '../components/CTAButtons';

export const metadata = {
  title: 'About | Beauty Image Spa',
  description:
    'Learn about Beauty Image Spa, our commitment to hygiene, quality products, and personalized beauty service.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">About Us</p>
          <h1>Your Trusted Local Beauty Destination</h1>
          <p>
            Beauty Image Spa was created to deliver premium beauty services in a
            warm, elegant atmosphere where every guest feels valued.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="container split-grid">
          <div>
            <h2>Our Mission</h2>
            <p>
              We help women feel polished and confident through exceptional nail
              artistry, professional service, and a clean, relaxing space.
            </p>
            <h2>Our Standards</h2>
            <p>
              We prioritize sanitation, premium-quality products, and continuous
              training to ensure outstanding results every visit.
            </p>
          </div>
          <div className="placeholder-image large" role="img" aria-label="Salon interior placeholder">
            {/* Replace with real salon interior/team image */}
            Salon interior photo placeholder
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Experience the Beauty Image Spa Difference</h2>
          <p>Schedule a visit and enjoy personalized luxury beauty care.</p>
          <CTAButtons />
        </div>
      </section>
    </PageShell>
  );
}
