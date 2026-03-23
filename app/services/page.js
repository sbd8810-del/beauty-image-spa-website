import PageShell from '../components/PageShell';
import CTAButtons from '../components/CTAButtons';

export const metadata = {
  title: 'Services | Beauty Image Spa',
  description:
    'Explore manicures, pedicures, gel nails, acrylics, nail art, and beauty spa services at Beauty Image Spa.',
};

const serviceGroups = [
  {
    title: 'Nail Care Essentials',
    items: ['Classic Manicure', 'Deluxe Manicure', 'Classic Pedicure', 'Spa Pedicure'],
  },
  {
    title: 'Enhancements & Style',
    items: ['Gel Polish', 'Acrylic Full Set', 'Acrylic Fill', 'Custom Nail Art'],
  },
  {
    title: 'Beauty & Spa Treatments',
    items: ['Paraffin Treatment', 'Hydrating Hand Mask', 'Lash Tint', 'Brow Shaping'],
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">Our Services</p>
          <h1>Elevated Nail & Beauty Experiences</h1>
          <p>
            Every service is delivered with precision, cleanliness, and genuine
            care for your comfort and style.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="container service-group-grid">
          {serviceGroups.map((group) => (
            <article key={group.title} className="service-list-card">
              <h2>{group.title}</h2>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <h2>Need Help Choosing the Right Service?</h2>
          <p>
            Our team is happy to recommend treatments based on your goals,
            lifestyle, and desired look.
          </p>
          <CTAButtons />
        </div>
      </section>
    </PageShell>
  );
}
