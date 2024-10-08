import "./style.css";
import { IoSearch } from "react-icons/io5";

const BookingForm = () => {
  return (
    <div className="form-container">
      <div className="booking-form">
        <form className="form">
          <div className="input">
            <label htmlFor="brand">CAR BRAND</label>
            <select name="brand" id="brand">
              <option value="">Select brand</option>
              <option value="Mercedes-Benz">Mercedes-Benz</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Porsche">Porsche</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="model">CAR MODEL</label>
            <select name="model" id="model">
              <option value="">Any</option>
              <option value="Sedan">Sedan</option>
              <option value="Coupe">Coupe</option>
              <option value="SUV">SUV</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="location">PICKUP LOCATION</label>
            <select name="location" id="location">
              <option value="">Any</option>
              <option value="Miami">Miami Airport</option>
            </select>
          </div>
          <div className="input">
            <label htmlFor="location">PICKUP DATE</label>
            <input type="date" />
          </div>
          <div className="input">
            <label htmlFor="location">RETOURNING DATE</label>
            <input type="date" />
          </div>
          {/* <input type="text" placeholder="Enter pickup location" />
          <input type="date" placeholder="Date" />
          <input type="time" placeholder="Hour" /> */}
        </form>
        <div className="continue-btn">
          <button>
            <IoSearch /> Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
