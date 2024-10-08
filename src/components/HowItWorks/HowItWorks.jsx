import "./style.css";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

function HowItWorks() {
  return (
    <div className="how-it-works-container">
      <div className="head-title">
        <h2>How it works</h2>
        <p>It`s simple, just follow these steps</p>
      </div>
      <div className="steps">
        <div className="step">
          <div className="icon">
            <MdLocationOn />
          </div>
          <div className="text">
            <p>Choose a location</p>
            <span>See your favourite hotel in our location of delivery</span>
          </div>
        </div>
        <div className="step">
          <div className="icon">
            <FaCalendarAlt />
          </div>
          <div className="text">
            <p>Pick-up date</p>
            <span>Then choose and when you want, we will deliver</span>
          </div>
        </div>
        <div className="step">
          <div className="icon">
            <FaCar />
          </div>
          <div>
            <p>Book your car</p>
            <span>Enjoy your every second of trip, with style!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
