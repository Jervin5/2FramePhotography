import "../styles/serviceDetails.css";


export default function BabyShoot() {
  const photos = [
    {
      title: "Adorable Themes",
      desc: "Soft pastel themes with cute props that highlight your baby’s innocence and joy.",
      image: "babyshoot", // Local image
    },
    {
      title: "Family Love Moments",
      desc: "Capturing natural expressions of joy, love, and bonding among parents and family.",
      image: "https://source.unsplash.com/1000x700/?family,baby,smile",
    },
    {
      title: "Candid Expressions",
      desc: "Unposed, spontaneous moments that make your baby’s photoshoot unforgettable.",
      image: "https://source.unsplash.com/1000x700/?baby,laugh,closeup",
    },
  ];

  return (
    <div className="service-detail-page">
      <header className="service-header">
        <h1>Baby Shower Photoshoot</h1>
        <p>We turn every tiny smile and giggle into forever memories.</p>
      </header>

      <div className="service-detail-sections">
        {photos.map((p, index) => (
          <div
            key={index}
            className={`detail-section ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <div className="text">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
            </div>
            <img src={p.image} alt={p.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
