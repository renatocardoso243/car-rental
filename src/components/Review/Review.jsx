import { FaStar } from "react-icons/fa";
import "./style.css";

// Importando imagens dos carros
import Car1 from "../../assets/images/mercedes.png";
import Car2 from "../../assets/images/audi.png";
import Car3 from "../../assets/images/bmw.png";

const reviews = [
  {
    name: "John Doe",
    rating: 5,
    comment:
      "Great experience! The car was clean and the service was outstanding. Highly recommend!",
    carImage: Car1,
  },
  {
    name: "Jane Smith",
    rating: 4,
    comment:
      "Good service overall, but I felt the car could have been better maintained. Still a solid experience.",
    carImage: Car2,
  },
  {
    name: "Mike Johnson",
    rating: 5,
    comment: "Amazing car and great service. Will definitely rent again!",
    carImage: Car3,
  },
];

const Review = () => {
  return (
    <div className="review-section">
      <h2>Recent reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-header">
              <h3>{review.name}</h3>
              <div className="review-rating">
                {[...Array(5)].map((star, i) => (
                  <FaStar
                    key={i}
                    color={i < review.rating ? "#ffc107" : "#e4e5e9"}
                  />
                ))}
              </div>
            </div>
            <div className="car-image-container">
              <img src={review.carImage} alt="Car" className="car-image" />
            </div>
            <p className="review-comment">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
