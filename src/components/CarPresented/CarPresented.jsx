import "./style.css";

import Interior from "../../assets/images/audir8interior.jpg";

import { FaPlayCircle } from "react-icons/fa";

function CarPresented() {
  return (
    <div className="car-presented">
      <div className="header">
        <div className="left-panel">
          {/* <img src={AudiLogo} alt="Audi Logo" /> */}
          <h3>Audi R8</h3>
        </div>
        <div className="right-panel">
          <p>
            The Audi R8 is a true masterpiece of engineering, blending luxury
            with extraordinary performance. Its 5.2L V10 engine delivers an
            exhilarating 562 horsepower, providing lightning-fast acceleration
            and a thrilling top speed of over 200 mph.{" "}
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left-panel">
          <h3>Interior</h3>
          <img src={Interior} alt="" />
          <FaPlayCircle className="icon" />
        </div>
        <div className="bottom-right-panel">
          <h3>Specs</h3>
          <div className="specs">
            <div className="spec">
              <h2>200 mph</h2>
              <p>Top Speed</p>
            </div>
            <div className="spec">
              <h2>5.2 sec</h2>
              <p>Acceleration</p>
            </div>
            <div className="spec">
              <h2>562 hp</h2>
              <p>Horsepower</p>
            </div>
            <div className="spec">
              <h2>5.2 L</h2>
              <p>Torque</p>
            </div>
          </div>
        </div>

        <div className="reserve-button">
          <button>Rent Now</button>
        </div>
      </div>
    </div>
  );
}

export default CarPresented;
