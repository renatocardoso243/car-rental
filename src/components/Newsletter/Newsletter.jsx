import "./style.css";
import CarImage from "../../assets/images/a6.png";

function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-left-panel">
        <img src={CarImage} alt="Audi A6" />
      </div>
      <div className="newsletter-right-panel">
        <h3>Subscribe to our newsletter to get update to our latest cars.</h3>
        <p>
          Get 20% off your first rent just by subscribing to our news letter
        </p>
        <div className="newsletter-input">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="newsletter-footer">
          <p>You will be able to unsubscribe any time.</p>
          <p>
            Read our privacy policy <a href="">here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
