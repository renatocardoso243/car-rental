import Navbar from "../../components/Navbar/Navbar";
import { PiSealWarning } from "react-icons/pi";

import "./style.css";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="container-register">
        <div className="register-header">
          <h1>Helo!</h1>
          <p>To get started, fill in your basic details:</p>
        </div>
        <div className="basic-information">
          <form action="">
            <input type="text" placeholder="Full name *" />
            <input type="text" placeholder="Nationality *" />
            <input type="text" placeholder="Document number *" />
            <div className="gender">
              <div className="gender-title">
                <h4>Gender</h4>
              </div>
              <div className="gender-options">
                <input type="radio" name="gender" id="male" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" id="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="contact-header">
              <p>Fill with your contact information</p>
              <div className="information-warning">
                <p>Atention!</p>
                <p>
                  Remember to check the information you filled in, it will be
                  important to complete your registration and make your
                  reservation.
                </p>
              </div>
            </div>
            <div className="contact-information">
              <div className="phone-email">
                <input type="text" placeholder="Phone number *" />
                <input type="text" placeholder="Confirm phone number *" />
                <input type="text" placeholder="Email address *" />
                <input type="text" placeholder="Confirm email address *" />
              </div>
              <div className="password-section">
                <div className="password-box">
                  <input type="password" placeholder="Password *" />
                  <input type="password" placeholder="Confirm password *" />
                </div>
                <div className="tip-to-strong-pass">
                  <h3>Requirements for a strong password:</h3>
                  <ul>
                    <li>At least 8 characters</li>
                    <li>At least 1 number</li>
                    <li>At least 1 uppercase letter</li>
                    <li>At least 1 lowercase letter</li>
                    <li>At least 1 special character</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="promotional-agreement">
              <input type="checkbox" />
              <p>
                I agree to receive promotional and marketing communications.
              </p>
            </div>
            <div className="privacy-policy">
              <p>
                <PiSealWarning /> The information collected in the
                customer&apos;`s registration will be used to identify
                reservations and execute the contract between the holder and
                CarRental. For more information about the processing of personal
                data, visit our Privacy Portal.
              </p>
            </div>
            <div className="register-btn">
              <button>REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
