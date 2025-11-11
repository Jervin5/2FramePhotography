import "../styles/serviceDetails.css";
import bride_1 from '../assets/Brideshoot/bride-2.jpg'
import bride_2 from '../assets/Brideshoot/bride-3.jpg'
import bride_3 from '../assets/Brideshoot/bride-4.jpg'
export default function BrideGroomShoot() {
  return (
    <div className="service-detail-page">
      <section className="service-header">
        <h1>Bride & Groom Shoots</h1>
        <p>
          Experience the magic of togetherness with cinematic portraits that express your love, elegance, and bond.
        </p>
      </section>

      <section className="service-detail-sections">
        <div className="detail-section">
          <img src={bride_1} alt="Bride Groom Portrait" />
          <div className="text">
            <h2>Romantic Poses</h2>
            <p>
              We craft artistic compositions that capture chemistry — elegant poses with emotional connection.
            </p>
          </div>
        </div>

        <div className="detail-section reverse">
          <img src={bride_2} alt="Joyful Couple" />
          <div className="text">
            <h2>Natural Expressions</h2>
            <p>
              Real smiles and candid glances — no overposing, just genuine love captured beautifully.
            </p>
          </div>
        </div>

        <div className="detail-section">
          <img src={bride_3} alt="Outdoor Couple" />
          <div className="text">
            <h2>Outdoor Beauty</h2>
            <p>
              Under soft sunlight or golden evenings, we create cinematic visuals that you’ll cherish forever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
