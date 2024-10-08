import "./style.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo e descrição */}
        <div className="footer-section footer-branding">
          <h2>CarRental</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            aliquam purus, sit amet luctus venenatis.
          </p>
          <div className="footer-socials">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaGoogle />
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Community</li>
            <li>Testimonial</li>
          </ul>
        </div>

        {/* <div className="footer-section footer-links">
          <h3>Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Tweet @ Us</li>
            <li>Webinars</li>
            <li>Feedback</li>
          </ul>
        </div> */}

        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Collection</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contato */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>📞 +91 98765 4321 54</p>
          <p>✉️ support@mail.com</p>
        </div>
      </div>

      {/* Copyright e Links Legais */}
      <div className="footer-bottom">
        <p>© Copyright by CarRental. All rights reserved.</p>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Legal</li>
          <li>Site Map</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
