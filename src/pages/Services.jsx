import { Link } from "react-router-dom";
import "../styles/services.css";

export default function Services() {
  const services = [
    {
      title: "Baby Shower Photoshoots",
      image: "https://source.unsplash.com/600x400/?baby,photoshoot",
      description:
        "Celebrate the beauty of motherhood and new beginnings with soft, tender photography that captures emotions and joy.",
    },
    {
      title: "Wedding Photography",
      image: "https://source.unsplash.com/600x400/?wedding,couple",
      description:
        "Timeless wedding stories told through our lenses — filled with laughter, love, and unforgettable memories.",
    },
    {
      title: "Modeling Portfolios",
      image: "https://source.unsplash.com/600x400/?model,portrait",
      description:
        "Showcase your personality and confidence with professional portfolio photography designed to stand out.",
    },
    {
      title: "Maternity Shoots",
      image: "https://source.unsplash.com/600x400/?maternity,portrait",
      description:
        "Capture the magical glow of motherhood in artistic, intimate portraits that celebrate this precious phase.",
    },
    {
      title: "Outdoor Couple Shoots",
      image: "https://source.unsplash.com/600x400/?couple,outdoor",
      description:
        "Romantic and spontaneous outdoor shoots that reflect real chemistry, laughter, and connection.",
    },
  ];

  return (
    <main className="services-page">
      <section className="services-header">
        <h1>Our Photography Services</h1>
        <p>
          Every story deserves to be captured beautifully. Explore our range of
          professional photography sessions designed to preserve your moments
          forever.
        </p>
      </section>

      <section className="services-wrapper">
        <div className="services-grid">
          {services.map((service, i) => (
            <div key={i} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="book-btn"><Link to='/contact'>Book Now</Link></button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
