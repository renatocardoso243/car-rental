import { useParams } from "react-router-dom";
import carsData from "../Fleet/carsData"; // ou onde você armazenar os dados dos carros
import Navbar from "../../components/Navbar/Navbar";
import "./ConfirmBooking.css";
import Footer from "../../components/Footer/Footer";

const ConfirmBooking = () => {
  const { id } = useParams(); // Capturar o ID da URL
  const car = carsData.find((car) => car.id === parseInt(id)); // Encontrar o carro pelo ID

  if (!car) {
    return <div>Car not found!</div>;
  }

  return (
    <div>
      <Navbar />
      <div className="confirm-booking-container">
        <div className="car-details">
          <img src={car.image} alt={`${car.brand} ${car.model}`} />
          <div className="car-info">
            <h3>
              {car.brand} {car.model}
            </h3>
            <div className="detailed-info">
              <div className="left-panel-info">
                <p>Price: ${car.price}/day</p>
                <p>Type: {car.type}</p>
                <p>Color: {car.color}</p>
                <p>Engine: {car.engine}</p>
                <p>Horsepower: {car.horsepower}</p>
              </div>
              <div className="right-panel-info">
                <p>Torque: {car.torque}</p>
                <p>Top Speed: {car.topSpeed}</p>
                <p>Seats: {car.seats}</p>
                <p>Transmission: {car.transmission}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-confirmation">
          <form className="form">
            <input type="text" placeholder="Enter pickup location" />
            <input type="date" placeholder="Date" />
            <input type="time" placeholder="Hour" />
            <button>RENT</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmBooking;
