import "../styles/serviceDetails.css";

export default function MaternityShoot() {
  return (
    <div className="service-detail-page">
      <section className="service-header">
        <h1>Maternity Sessions</h1>
        <p>
          We celebrate motherhood with elegance — capturing the glow, grace, and bond of an expecting mother.
        </p>
      </section>

      <section className="service-detail-sections">
        <div className="detail-section">
          <img src="https://source.unsplash.com/1000x700/?maternity,photo" alt="Maternity Portrait" />
          <div className="text">
            <h2>Elegant Portraits</h2>
            <p>
              Soft lighting and gentle tones that highlight your natural beauty and joy during this special time.
            </p>
          </div>
        </div>

        <div className="detail-section reverse">
          <img src="https://source.unsplash.com/1000x700/?pregnant,woman" alt="Pregnancy Glow" />
          <div className="text">
            <h2>Pure Emotions</h2>
            <p>
              We bring out real emotions — love, anticipation, and the beautiful bond between mother and child.
            </p>
          </div>
        </div>

        <div className="detail-section">
          <img src="https://source.unsplash.com/1000x700/?maternity,outdoor" alt="Outdoor Maternity" />
          <div className="text">
            <h2>Outdoor Serenity</h2>
            <p>
              Surrounded by nature, we compose peaceful and tender photographs that reflect life’s most beautiful moment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
