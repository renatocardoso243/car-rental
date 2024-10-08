import "./style.css";
import { Link } from "react-router-dom";

// import { FcGoogle } from "react-icons/fc";
// import { FaApple } from "react-icons/fa";
// import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-container">
      <div className="login-info">
        <h1>Welcome to CarRental</h1>
        <p>
          Join the best car rental service in the market! With an exclusive
          fleet of luxury cars, we guarantee comfort, safety, and premium
          service for all your trips. Sign up today and enjoy our special
          discounts for new users!
        </p>
        <Link to="/register">
          <button>Register Now</button>
        </Link>
      </div>

      <div className="login-form">
        <h2>Login to Your Account</h2>
        <form action="">
          <input type="email" placeholder="Email *" required />
          <input type="password" placeholder="Password *" required />
          <button type="submit">Login</button>
          <p>
            Don&apos;t have an account? <Link to="/register">Sign up here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
