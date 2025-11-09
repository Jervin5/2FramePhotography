import "../styles/testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Aarav & Priya",
      image: "https://source.unsplash.com/100x100/?couple,portrait",
      feedback:
        "2Frames Photography captured our wedding with such love and detail! Every photo felt alive and emotional. Truly timeless work.",
    },
    {
      name: "Neha Sharma",
      image: "https://source.unsplash.com/100x100/?woman,portrait",
      feedback:
        "My maternity shoot was a dream come true. The team made me feel so comfortable, and the pictures were beyond perfect!",
    },
    {
      name: "Rahul Mehta",
      image: "https://source.unsplash.com/100x100/?man,smile",
      feedback:
        "They took my modeling portfolio to a whole new level. The editing, lighting, and composition were simply stunning!",
    },
    {
      name: "The Iyer Family",
      image: "https://source.unsplash.com/100x100/?family,photo",
      feedback:
        "We had an amazing outdoor shoot — it was natural, fun, and beautifully captured. Highly recommend 2Frames Photography!",
    },
  ];

  return (
    <div className="testimonials-page">
      {/* Header Section */}
      <section className="testimonials-header">
        <h1>What Our Clients Say</h1>
        <p>
          Every smile, every emotion, every moment — our clients’ happiness is
          our greatest reward.
        </p>
      </section>

      {/* Testimonials Grid */}
      <section className="testimonials-grid container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <img src={t.image} alt={t.name} className="client-photo" />
            <p className="feedback">“{t.feedback}”</p>
            <h3 className="client-name">– {t.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
}
