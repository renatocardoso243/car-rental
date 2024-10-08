import { useState } from "react";

import s3_amg from "../../assets/images/mercedes_sls_amg.png";
import cla from "../../assets/images/mercedes_cla.png";
import amg_g63 from "../../assets/images/mercedes_utilitario.png";
import amg_g63_black from "../../assets/images/mercedes_utilitario_black.png";

import a6 from "../../assets/images/a6.png";
import r8 from "../../assets/images/r8.png";
import a8 from "../../assets/images/a8.png";

import m2coupe from "../../assets/images/m2coupe.png";
import i8 from "../../assets/images/i8.png";
import x6 from "../../assets/images/x6.png";
import M6 from "../../assets/images/bmw.png";

import gt3 from "../../assets/images/911.png";
import cayman from "../../assets/images/cayman.png";
import macan from "../../assets/images/macan.png";

import "./style.css";

const PreBookingForm = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [carImage, setCarImage] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [city, setCity] = useState("");
  const [isTraveling, setIsTraveling] = useState(false);
  const [destinations, setDestinations] = useState("");

  const brands = ["Mercedes-Benz", "Audi", "BMW", "Porsche"];
  const cars = {
    "Mercedes-Benz": [
      { name: "S3 AMG", image: s3_amg },
      { name: "CLA", image: cla },
      { name: "AMG G63", image: amg_g63 },
      { name: "AMG G63 Black Edition", image: amg_g63_black },
    ],
    Audi: [
      { name: "A6", image: a6 },
      { name: "R8", image: r8 },
      { name: "A8", image: a8 },
    ],
    BMW: [
      { name: "M2 Coupe", image: m2coupe },
      { name: "i8", image: i8 },
      { name: "X6", image: x6 },
      { name: "M6", image: M6 },
    ],
    Porsche: [
      { name: "911 GT3", image: gt3 },
      { name: "Cayman", image: cayman },
      { name: "Macan", image: macan },
    ],
  };

  const handleBrandChange = (e) => {
    setSelectedBrand(e.target.value);
    setSelectedCar("");
    setCarImage("");
  };

  const handleCarChange = (e) => {
    const selectedCar = e.target.value;
    setSelectedCar(selectedCar);
    setCarImage(
      cars[selectedBrand].find((car) => car.name === selectedCar)?.image || ""
    );
  };

  return (
    <div className="container">
      <h2>Pre-book Your Car</h2>
      <div className="pre-booking-form">
        <form>
          <div>
            <label>Brand:</label>
            <select value={selectedBrand} onChange={handleBrandChange}>
              <option value="">Select a brand</option>
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Car:</label>
            <select
              value={selectedCar}
              onChange={handleCarChange}
              disabled={!selectedBrand}
            >
              <option value="">Select a car</option>
              {selectedBrand &&
                cars[selectedBrand].map((car) => (
                  <option key={car.name} value={car.name}>
                    {car.name}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label>Start Date:</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div>
            <label>End Date:</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          <div>
            <label>City:</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <div className="traveling-section">
            <label>Traveling?</label>
            <input
              type="checkbox"
              checked={isTraveling}
              onChange={() => setIsTraveling(!isTraveling)}
            />
          </div>

          {isTraveling && (
            <div>
              <label>Destinations:</label>
              <textarea
                value={destinations}
                onChange={(e) => setDestinations(e.target.value)}
                placeholder="Enter your destinations"
              ></textarea>
            </div>
          )}

          <button className="submit-btn" type="submit">
            Submit Pre-booking
          </button>
        </form>

        {carImage && (
          <div className="car-image">
            <img src={carImage} alt={selectedCar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreBookingForm;
