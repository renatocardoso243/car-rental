import { Link } from "react-router-dom";
import { useState } from "react";
import { FaUserAlt, FaBars, FaTimes } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa6";

import "./style.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Navbar">
      <div className="container-navbar">
        <nav className="navbar">
          <div className="logo">
            <Link to="/">CarRental</Link>
          </div>
          <div className="nav-links">
            <div className="links">
              <Link to="/">Home</Link>
              <a href="#services">Service</a>
              <Link to="/Fleet">Collection</Link>
              <Link to="/Faq">FAQ</Link>
              <Link to="/">Contact</Link>
            </div>
          </div>
          <div className="user-tools">
            <div className="user-actions">
              <span>
                <FaUserAlt />
              </span>
              <Link to="/Login"> Login</Link>
              <span> | </span>
              <Link to="/Register">Register</Link>
            </div>
            <div className="user-actions">
              <span>
                <FaCarSide />
              </span>
              <Link to="/#"> My Bookings</Link>
            </div>
          </div>
        </nav>
        {/* Mobile menu */}
        <div className="topnav">
          <div className="menu-mobile">
            <h2 id="logo">CarRental</h2>
          </div>

          <div className="full-screen-menu">
            <div className={`overlay ${isMenuOpen ? "open" : ""}`}>
              <span className="closebtn" onClick={() => setIsMenuOpen(false)}>
                <FaTimes />
              </span>
              <div className="overlay-content">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  HOME
                </Link>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>
                  SERVICE
                </a>
                <Link to="/Fleet" onClick={() => setIsMenuOpen(false)}>
                  FLEET
                </Link>
                <Link to="/Faq" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </Link>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  CONTACT
                </Link>
                <Link to="/Login">LOGIN</Link>
                <Link to="/Register">REGISTER</Link>
                <Link to="/#">MY BOOKINGS</Link>
              </div>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
