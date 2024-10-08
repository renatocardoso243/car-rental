import "./style.css";
import { FaRegCreditCard } from "react-icons/fa";
import { MdOutlineReceiptLong } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

function ChooseUs() {
  return (
    <div className="choose-us-container">
      <div className="choose-us-content">
        <div className="choose-us-content-text">
          <h2>Why Choose Us</h2>
          <div className="cards">
            <div className="card">
              <div className="icon">
                <MdOutlineReceiptLong />
              </div>
              <h3>No hidden fees on arrival</h3>
              <p>Loren ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="card">
              {" "}
              <div className="icon">
                <FaRegCreditCard />
              </div>
              <h3>No credit card needed</h3>
              <p>Loren ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className="card">
              <div className="icon">
                <FaCalendarAlt />
              </div>
              <h3>Fast booking process</h3>
              <p>Loren ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ChooseUs;
