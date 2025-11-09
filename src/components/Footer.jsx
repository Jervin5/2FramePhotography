import "../styles/footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-about">
                    <h3>2Frames Photography</h3>
                    <p>
                        Capturing emotions, crafting memories, and turning moments into timeless art.
                    </p>
                </div>

                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/gallery">Gallery</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png" alt="X" />
                        </a>
                    </div>

                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2025 2Frames Photography | Designed with ❤️ by Praveen</p>
            </div>
        </footer>
    );
}
