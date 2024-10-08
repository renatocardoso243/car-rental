import "./style.css";

import amg_g63_black from "../../assets/images/mercedes_utilitario_black.png";
import M6 from "../../assets/images/bmw.png";
import gt3 from "../../assets/images/911.png";
import i8 from "../../assets/images/i8.png";

import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

const cars = [
  {
    id: 4,
    brand: "BMW",
    model: "M6",
    pricePerDay: 200, // em dólares
    pricePerMonth: 4000, // em dólares
    type: "Sedan",
    color: "Black",
    image: M6,
    engine: "4.4L V8",
    horsepower: 425,
    torque: "700 Nm",
    topSpeed: "250 km/h",
    seats: 4,
    transmission: "Automatic",
  },
  {
    id: 2,
    brand: "BMW",
    model: "i8",
    pricePerDay: 250, // em dólares
    pricePerMonth: 5000, // em dólares
    type: "Sedan",
    color: "Silver",
    image: i8,
    engine: "1.5L hybrid electric motor",
    horsepower: 369,
    torque: "570 Nm",
    topSpeed: "250 km/h",
    seats: 4,
    transmission: "Automatic",
  },
  {
    id: 11,
    brand: "Mercedes-Benz",
    model: "AMG G63 ",
    pricePerDay: 350, // em dólares
    pricePerMonth: 7000, // em dólares
    type: "SUV",
    color: "Black",
    image: amg_g63_black,
    engine: "4.0L V8 biturbo",
    horsepower: 577,
    torque: "850 Nm",
    topSpeed: "240 km/h",
    seats: 5,
    transmission: "Automatic",
  },
  {
    id: 12,
    brand: "Porsche",
    model: "911 GT3",
    pricePerDay: 400, // em dólares
    pricePerMonth: 8000, // em dólares
    type: "Sedan",
    color: "Red",
    image: gt3,
    engine: "4.0L flat-6",
    horsepower: 502,
    torque: "469 Nm",
    topSpeed: "320 km/h",
    seats: 2,
    transmission: "Manual",
  },
];

function TrendingCars() {
  return (
    <div className="trending-cars">
      <div className="trending-header">
        <h2>Top-Rated Vehicles</h2>
        <a href="/Fleet">
          <button>View All &rarr;</button>
        </a>
      </div>
      <div className="trending-card-container">
        {cars.map((car) => (
          <div className="trending-card" key={car.id}>
            <div className="img-container">
              <img src={car.image} alt={car.name} />
            </div>
            <div className="trending-name">
              <p id="car-name">
                {car.brand} {car.model}
              </p>
              <div className="price">
                <div className="perday">
                  <p>${car.pricePerDay}/day</p>
                </div>
                <div>
                  <span>|</span>
                </div>
                <div className="permonth">
                  <p>${car.pricePerMonth}/month</p>
                </div>
              </div>

              <hr />

              <div className="info">
                <span>
                  <IoSpeedometerOutline /> {car.topSpeed}
                </span>
                <span>
                  <GiGearStickPattern /> {car.transmission}
                </span>
                <span>
                  <MdAirlineSeatReclineExtra /> {car.seats}
                </span>
              </div>
            </div>
            <div className="actions">
              <a href="/fleet">
                <button>Rent Now</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingCars;
