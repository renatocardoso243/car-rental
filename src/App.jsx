import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home/Home";
import Fleet from "./pages/Fleet/Fleet";
import ConfirmBooking from "./pages/ConfirmBooking/ConfirmBooking";
import Faq from "./pages/Faq/Faq";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/confirm-booking/:id" element={<ConfirmBooking />} />
        <Route path="/Faq" element={<Faq />} />
      </Routes>
    </>
  );
}

export default App;
