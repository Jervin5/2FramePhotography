import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

import "./styles/global.css";
import BabyShoot from "./pages/BabyShoot";
import WeddingShoot from "./pages/WeddingShoot";
import BrideGroomShoot from "./pages/BrideGroomShoot";
import MaternityShoot from "./pages/MaternityShoot";
import FamilyFunctionShoot from "./pages/FamilyFunctionShoot";


export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/baby-shoot" element={<BabyShoot />} />
          <Route path="/wedding-shoot" element={<WeddingShoot />} />
        <Route path="/bride-groom-shoot" element={<BrideGroomShoot />} />
        <Route path="/maternity-shoot" element={<MaternityShoot />} />
        <Route path="/family-function-shoot" element={<FamilyFunctionShoot />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
