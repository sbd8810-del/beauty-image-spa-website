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
            <p>Phone: (215) 572-7546</p>
            <p>Address: 418 Old York Rd, Jenkintown, PA 19046</p>

            <h3>Business Hours</h3>
            <p>Sunday: Closed</p>
            <p>Monday: 9 AM–5 PM</p>
            <p>Tuesday: 9 AM–5 PM</p>
            <p>Wednesday: 9 AM–6 PM</p>
            <p>Thursday: 8 AM–7 PM</p>
            <p>Friday: 8 AM–7 PM</p>
            <p>Saturday: 8 AM–5 PM</p>
          </div>

          <form className="contact-form" aria-label="Contact form">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your Name" required />

            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" placeholder="(215) 572-7546" required />

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
