import { useState } from "react";
import "../styles/gallery.css";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    "https://source.unsplash.com/600x600/?wedding,photo",
    "https://source.unsplash.com/600x600/?baby,studio",
    "https://source.unsplash.com/600x600/?couple,shoot",
    "https://source.unsplash.com/600x600/?maternity,portrait",
    "https://source.unsplash.com/600x600/?bride,groom",
    "https://source.unsplash.com/600x600/?pregnancy,photoshoot",
    "https://source.unsplash.com/600x600/?family,photo",
  ];

  return (
    <div className="gallery-page">
      {/* Header */}
      <section className="gallery-header">
        <h1>Our Gallery</h1>
        <p>
          Explore our collection of captured moments — from laughter to love,
          every frame tells a story.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid container">
        {images.map((img, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => setSelectedImage(img)}
          >
            <img src={img} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </section>

      {/* Lightbox View */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
}
