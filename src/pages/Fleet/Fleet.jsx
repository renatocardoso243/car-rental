import { useState } from "react";

import "./fleets.css";

import carsData from "../Fleet/carsData";

import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import BookingForm from "../../components/BookingForm/BookingForm";
import Footer from "../../components/Footer/Footer";

import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";

const Fleet = () => {
  const [filters, setFilters] = useState({
    brand: [],
    type: [],
    color: [],
  });

  const [appliedFilters, setAppliedFilters] = useState(filters);

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prev) => {
      const newFilterValues = checked
        ? [...prev[name], value]
        : prev[name].filter((item) => item !== value);
      return { ...prev, [name]: newFilterValues };
    });
  };

  // Função para aplicar os filtros ao clicar no botão
  const applyFilters = () => {
    setAppliedFilters(filters);
  };

  // Aplicar os filtros com base no estado de `appliedFilters`
  const filteredCars = carsData.filter((car) => {
    const brandMatch = appliedFilters.brand.length
      ? appliedFilters.brand.includes(car.brand)
      : true;
    const typeMatch = appliedFilters.type.length
      ? appliedFilters.type.includes(car.type)
      : true;
    const colorMatch = appliedFilters.color.length
      ? appliedFilters.color.includes(car.color)
      : true;
    return brandMatch && typeMatch && colorMatch;
  });
  return (
    <div>
      <Navbar />
      <BookingForm />
      <div className="container">
        <div className="title">
          <h2>Our Fleet</h2>
        </div>
        <div className="fleets-container">
          <aside className="filters">
            <h2>Filter by:</h2>

            <div className="filter-section">
              <h3>Brand</h3>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="BMW"
                  onChange={handleFilterChange}
                />{" "}
                BMW
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Audi"
                  onChange={handleFilterChange}
                />{" "}
                Audi
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Mercedes-Benz"
                  onChange={handleFilterChange}
                />{" "}
                Mercedes-Benz
              </label>
              <label>
                <input
                  type="checkbox"
                  name="brand"
                  value="Porsche"
                  onChange={handleFilterChange}
                />{" "}
                Porsche
              </label>
            </div>

            <div className="filter-section">
              <h3>Type</h3>
              <label>
                <input
                  type="checkbox"
                  name="type"
                  value="SUV"
                  onChange={handleFilterChange}
                />
                SUV
              </label>
              <label>
                <input
                  type="checkbox"
                  name="type"
                  value="Sedan"
                  onChange={handleFilterChange}
                />
                Sedan
              </label>
            </div>

            <div className="filter-section">
              <h3>Color</h3>
              <label>
                <input
                  type="checkbox"
                  name="color"
                  value="Black"
                  onChange={handleFilterChange}
                />
                Black
              </label>
              <label>
                <input
                  type="checkbox"
                  name="color"
                  value="White"
                  onChange={handleFilterChange}
                />
                White
              </label>
              <label>
                <input
                  type="checkbox"
                  name="color"
                  value="Blue"
                  onChange={handleFilterChange}
                />
                Blue
              </label>
              <label>
                <input
                  type="checkbox"
                  name="color"
                  value="Blue"
                  onChange={handleFilterChange}
                />
                Red
              </label>
            </div>

            <button className="apply-filters-btn" onClick={applyFilters}>
              Apply Filters
            </button>
          </aside>
          <section className="car-list">
            {filteredCars.length ? (
              filteredCars.map((car) => (
                <div className="car-card" key={car.id}>
                  <div className="img-container">
                    <img src={car.image} alt={car.name} />
                  </div>
                  <div className="car-name">
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
                    <Link to={`/confirm-booking/${car.id}`}>
                      <button className="book-now">Rent Now</button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>No cars match your filters.</p>
            )}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Fleet;
