import "../styles/contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
      {/* Header */}
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          Let’s capture your most beautiful moments together. Reach out for
          bookings, collaborations, or inquiries.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section container">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="you@example.com" required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5"></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Studio Info</h2>
          <p>
            <strong>2Frames Photography</strong>
            <br />
            12th Main Road, Anna Nagar,
            <br />
            Coimbatore, India
          </p>

          <p>
            📞 <strong>+91 123456789</strong>
            <br />
            ✉️ <strong>info@2framephotography.com</strong>
          </p>

          <div className="social-icons">
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733558.png"
                alt="Instagram"
              />
            </a>
            <a href="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
