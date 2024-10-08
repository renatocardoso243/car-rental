import "./style.css";

import App from "../../assets/images/app.png";
import AppleStore from "../../assets/images/logos/applestore.png";
import GooglePlay from "../../assets/images/logos/googleplay.png";

function OurApp() {
  return (
    <section className="app-promotion">
      <div className="app-promotion-content">
        <h2>Discover Our App</h2>
        <p>
          Experience the full potential of our platform at your fingertips.
          Download our app and book your car quickly and conveniently!
        </p>
        <div className="app-download-buttons">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GooglePlay}
              alt="Google Play Store"
              className="download-button"
            />
          </a>
          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={AppleStore} alt="App Store" className="download-button" />
          </a>
        </div>
      </div>
      <div className="app-promotion-image">
        <img src={App} alt="App Preview" />
      </div>
    </section>
  );
}

export default OurApp;
