import "../styles/serviceDetails.css";

export default function WeddingShoot() {
  return (
    <div className="service-detail-page">
      <section className="service-header">
        <h1>Wedding Photography</h1>
        <p>
          We turn your big day into timeless art — capturing emotions, laughter, tears, and love that lasts forever.
        </p>
      </section>

      <section className="service-detail-sections">
        <div className="detail-section">
          <img src="https://source.unsplash.com/1000x700/?wedding,ceremony" alt="Wedding Ceremony" />
          <div className="text">
            <h2>Candid Emotions</h2>
            <p>
              Every genuine laugh and tear is caught in the moment — giving you a memory that feels real and heartfelt.
            </p>
          </div>
        </div>

        <div className="detail-section reverse">
          <img src="https://source.unsplash.com/1000x700/?wedding,bride,groom" alt="Bride and Groom" />
          <div className="text">
            <h2>Bride & Groom Portraits</h2>
            <p>
              Elegant, intimate portraits that celebrate your love story, carefully lit and artistically composed.
            </p>
          </div>
        </div>

        <div className="detail-section">
          <img src="https://source.unsplash.com/1000x700/?wedding,decor" alt="Wedding Decor" />
          <div className="text">
            <h2>Details That Matter</h2>
            <p>
              From your rings to your floral setup — we highlight every detail that makes your celebration unique.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
