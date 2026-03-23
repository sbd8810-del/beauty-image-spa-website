export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>Beauty Image Spa</h2>
          {/* Replace with final brand positioning */}
          <p>
            Luxury nail and beauty care designed to help you feel polished,
            confident, and radiant.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          {/* Replace with real phone, address, and email */}
          <p>(555) 123-4567</p>
          <p>123 Elegance Avenue, Suite 7</p>
          <p>Springfield, ST 12345</p>
          <p>hello@beautyimagespa.com</p>
        </div>
        <div>
          <h3>Hours</h3>
          {/* Replace with your final business hours */}
          <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
          <p>Saturday: 9:00 AM - 6:00 PM</p>
          <p>Sunday: 10:00 AM - 4:00 PM</p>
        </div>
        <div>
          <h3>Follow Us</h3>
          {/* Replace placeholder social links */}
          <p>
            <a href="#" aria-label="Instagram link">
              Instagram
            </a>
          </p>
          <p>
            <a href="#" aria-label="Facebook link">
              Facebook
            </a>
          </p>
          <p>
            <a href="#" aria-label="TikTok link">
              TikTok
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
