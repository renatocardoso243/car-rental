import "./CarCategory.css";

import Brand1 from "../../assets/images/mercedes_logo.png";
import Brand2 from "../../assets/images/audilogo.png";
import Brand3 from "../../assets/images/bmwlogo.png";
import Brand4 from "../../assets/images/porsche-logo.png";

import Car1 from "../../assets/images/r8.png";
import Car2 from "../../assets/images/mercedes_utilitario_black.png";
import Car3 from "../../assets/images/x6.png";

const CarCategory = () => {
  return (
    <div className="car-category-container">
      <div className="brands">
        <img src={Brand1} alt="" />
        <img src={Brand2} alt="" />
        <img src={Brand3} alt="" />
        <img src={Brand4} alt="" />
      </div>
      <h2>Check our categories</h2>
      <div className="categories">
        <div className="card">
          <div>
            <img src={Car1} alt="" />
          </div>
          <p>Coupe</p>
          <button id="button">7 Cars</button>
        </div>
        <div className="card">
          <div>
            <img src={Car3} alt="" />
          </div>
          <p>Sedan</p>
          <button id="button">5 Cars</button>
        </div>
        <div className="card">
          <div>
            <img src={Car2} alt="" />
          </div>
          <p>SUV</p>
          <button id="button">2 Cars</button>
        </div>
      </div>
    </div>
  );
};

export default CarCategory;
