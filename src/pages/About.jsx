import "../styles/about.css";

export default function About() {
  return (
    <div className="about">
      {/* Top Banner */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About 2Frames Photography</h1>
          <p>Capturing emotions, not just pictures.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="story container">
        <div className="story-image">
          <img
            src="https://source.unsplash.com/800x600/?photographer,studio"
            alt="Our Studio"
          />
        </div>
        <div className="story-text">
          <h2>Our Story</h2>
          <p>
            At <strong>2Frames Photography</strong>, photography is not just a
            profession – it’s our passion. We started this journey to preserve
            those fleeting moments that make life beautiful. From baby showers
            to weddings, we believe every story deserves to be told with love,
            light, and creativity.
          </p>
          <p>
            Our team of talented photographers and editors combine artistic
            vision with modern technology to craft timeless memories you’ll
            cherish forever.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2>Why Choose 2Frames Photography?</h2>
          <div className="reasons">
            <div className="reason-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1055/1055646.png"
                alt="Quality"
              />
              <h3>Professional Quality</h3>
              <p>We use premium gear and lighting to ensure crystal clarity.</p>
            </div>
            <div className="reason-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1048/1048953.png"
                alt="Creativity"
              />
              <h3>Creative Vision</h3>
              <p>
                Each frame is crafted artistically to reflect real emotions and
                stories.
              </p>
            </div>
            <div className="reason-card">
              <img
                src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
                alt="Trust"
              />
              <h3>Trusted by Families</h3>
              <p>Over hundreds of clients trust us to capture their happiest moments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
