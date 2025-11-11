import { useState, useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import babyshower from '../assets/Babyshoot/baby_1.jpg'
import maternity from '../assets/Maternityshoot/maternity-1.jpg'
import bride from '../assets/Brideshoot/bride-1.jpg'
import wedding from '../assets/Weddingshoot/wedding-2.jpg'


const slides = [
  {
    title: "Capture Your Precious Baby Shower Moments",
    image: "https://source.unsplash.com/1600x900/?baby,photoshoot",
  },
  {
    title: "Celebrate Love with Stunning Wedding Photography",
    image: "https://source.unsplash.com/1600x900/?wedding,bride",
  },
  {
    title: "Beautiful Bride & Groom Moments",
    image: "https://source.unsplash.com/1600x900/?bride,groom,photoshoot",
  },
  {
    title: "Cherish the Glow of Maternity",
    image: "https://source.unsplash.com/1600x900/?maternity,photo",
  },
  {
    title: "Joyful Family Function Memories",
    image: "https://source.unsplash.com/1600x900/?family,celebration",
  },
];

const services = [
  {
    title: "Baby Shower Shoots",
    desc: "Soft, emotional, and heartwarming memories captured beautifully.",
    image: babyshower,
    link: "/baby-shoot",
  },
  {
    title: "Wedding Photography",
    desc: "Every emotion, every smile, and every detail — preserved forever.",
    image: wedding,
    link: "/wedding-shoot",
  },
  {
    title: "Bride & Groom Shoots",
    desc: "Celebrate love and togetherness with elegant, romantic portraits.",
    image: bride,
    link: "/bride-groom-shoot",
  },
  {
    title: "Maternity Sessions",
    desc: "Elegant, graceful, and full of maternal love & beauty.",
    image: maternity,
    link: "/maternity-shoot",
  },
  {
    title: "Family Function Shoots",
    desc: "Capture joyful family gatherings, traditions, and heartfelt moments.",
    image: "https://source.unsplash.com/600x400/?family,event,celebration",
    link: "/family-shoot",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h1>{slide.title}</h1>
              <button>
                <Link to="/contact">Book a Session</Link>
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section className="mission">
        <p>
          “We capture emotions, craft memories, and turn moments into timeless art.”
        </p>
      </section>

      {/* Services */}
      <section className="services container">
        <h2>Our Signature Shoots</h2>
        <div className="service-grid">
          {services.map((srv, i) => (
            <Link to={srv.link} key={i} className="card-link">
              <div className="card">
                <img src={srv.image} alt={srv.title} />
                <div className="card-content">
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Floating Book Button */}
      <button className="book-now">
        <Link to="/contact">Book Now</Link>
      </button>
    </div>
  );
}
