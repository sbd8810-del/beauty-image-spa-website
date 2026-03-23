import PageShell from '../components/PageShell';

export const metadata = {
  title: 'Contact | Beauty Image Spa',
  description:
    'Contact Beauty Image Spa to call, book, or visit us for your next manicure, pedicure, or beauty spa treatment.',
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="inner-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Book, Call, or Visit Us</h1>
          <p>
            We are here to help you schedule your next beauty appointment and
            answer any service questions.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="container split-grid contact-split">
          <div>
            <h2>Contact Information</h2>
            {/* Replace with real contact details */}
            <p>Phone: (555) 123-4567</p>
            <p>Email: hello@beautyimagespa.com</p>
            <p>Address: 123 Elegance Avenue, Suite 7, Springfield, ST 12345</p>

            <h3>Business Hours</h3>
            {/* Replace with final operating hours */}
            <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
            <p>Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: 10:00 AM - 4:00 PM</p>
          </div>

          <form className="contact-form" aria-label="Contact form">
            {/* Connect form action to your CRM, email service, or booking software */}
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" required />

            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" required />

            <label htmlFor="service">Service Interest</label>
            <input id="service" name="service" type="text" placeholder="e.g., Gel Manicure" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell us how we can help" />

            <button type="submit" className="button-primary full-width">
              Send Request
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
