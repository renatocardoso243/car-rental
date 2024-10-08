import BookingForm from "../../components/BookingForm/BookingForm";
import CarCategory from "../../components/CarCategory/CarCategory";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import TrendingCars from "../../components/Trending Cars/TrendingCars";
import "./Home.css";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Newsletter from "../../components/Newsletter/Newsletter";
import Review from "../../components/Review/Review";
import OurApp from "../../components/OurApp/OurApp";
import ChooseUs from "../../components/ChooseUs/ChooseUs";
import CarPresented from "../../components/CarPresented/CarPresented";

function Home() {
  return (
    <div>
      <Navbar />
      <BookingForm />
      <Hero />
      <div className="container">
        <CarCategory />
      </div>
      <div className="container">
        <HowItWorks />
      </div>
      <div className="container">
        <ChooseUs />
      </div>
      <div className="container">
        <TrendingCars />
      </div>
      <div className="container">
        <CarPresented />
      </div>
      {/* Offer Banner */}
      <div className="container">
        <OurApp />
      </div>
      <div className="container">
        <Review />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
