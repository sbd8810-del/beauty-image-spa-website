export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>Beauty Image Spa</h2>
          <p>
            Luxury nail and beauty care designed to help you feel polished,
            confident, and radiant.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>(215) 572-7546</p>
          <p>418 Old York Rd</p>
          <p>Jenkintown, PA 19046</p>
        </div>
        <div>
          <h3>Hours</h3>
          <p>Sunday: Closed</p>
          <p>Monday: 9 AM–5 PM</p>
          <p>Tuesday: 9 AM–5 PM</p>
          <p>Wednesday: 9 AM–6 PM</p>
          <p>Thursday: 8 AM–7 PM</p>
          <p>Friday: 8 AM–7 PM</p>
          <p>Saturday: 8 AM–5 PM</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>
            <a href="https://www.instagram.com/beauty_image_spa/" aria-label="Beauty Image Spa Instagram" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/Beautyimagespa" aria-label="Beauty Image Spa Facebook" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </p>
        </div>
      </div>
      <div className="container footer-base">
        <p>© {new Date().getFullYear()} Beauty Image Spa. All rights reserved.</p>
      </div>
    </footer>
  );
}
