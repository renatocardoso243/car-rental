import "./style.css";
import { useEffect } from "react";

import Car1 from "../../assets/images/mercedes.png";
import Car2 from "../../assets/images/audi.png";
import Car3 from "../../assets/images/bmw.png";
import Car4 from "../../assets/images/Porsche.png";

import GooglePlay from "../../assets/images/logos/googleplay.png";
import AppleStore from "../../assets/images/logos/applestore.png";

function Hero() {
  useEffect(() => {
    let currentIndex = 0;
    const images = document.querySelectorAll(".carousel-image");
    const totalImages = images.length;

    function showNextImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add("active");
    }
    const interval = setInterval(showNextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Looking to save more on your next trip?</h1>
          <p>
            Experience the epitome of luxury and performance with our exclusive
            fleet of premium vehicles. Whether for business or pleasure, our
            meticulously curated selection of high-end cars ensures a driving
            experience that is as refined as it is exhilarating. Book your
            journey today and elevate every moment on the road with unparalleled
            style and comfort.
          </p>
          {/* <Link>
            <button>Get Started</button>
          </Link> */}
          <div className="app-container">
            <img src={GooglePlay} alt="Google Play" />
            <img src={AppleStore} alt="Apple Store" />
          </div>
        </div>
        <div className="hero-image">
          <div className="carousel">
            <img src={Car1} className="carousel-image active" alt="Mercedes" />
            <img src={Car2} className="carousel-image" alt="Audi" />
            <img src={Car3} className="carousel-image" alt="BMW" />
            <img src={Car4} className="carousel-image" alt="Porsche" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
