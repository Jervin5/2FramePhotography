import "../styles/serviceDetails.css";

export default function FamilyFunctionShoot() {
  return (
    <div className="service-detail-page">
      <section className="service-header">
        <h1>Family Function Shoots</h1>
        <p>
          Relive every moment from your family gatherings — laughter, rituals, and joy captured beautifully.
        </p>
      </section>

      <section className="service-detail-sections">
        <div className="detail-section">
          <img src="https://source.unsplash.com/1000x700/?family,event" alt="Family Function" />
          <div className="text">
            <h2>Traditional Moments</h2>
            <p>
              Every ritual and cultural moment is documented with warmth and authenticity.
            </p>
          </div>
        </div>

        <div className="detail-section reverse">
          <img src="https://source.unsplash.com/1000x700/?family,celebration" alt="Celebration" />
          <div className="text">
            <h2>Fun & Laughter</h2>
            <p>
              Genuine expressions of love and laughter — those candid moments that make memories special.
            </p>
          </div>
        </div>

        <div className="detail-section">
          <img src="https://source.unsplash.com/1000x700/?family,portrait" alt="Family Portrait" />
          <div className="text">
            <h2>Family Portraits</h2>
            <p>
              Beautifully composed family portraits that reflect togetherness and affection.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
