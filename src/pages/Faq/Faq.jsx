import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import "./style.css";
import Footer from "../../components/Footer/Footer";

const FAQ = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (index) => {
    if (openQuestions.includes(index)) {
      setOpenQuestions(openQuestions.filter((i) => i !== index));
    } else {
      setOpenQuestions([...openQuestions, index]);
    }
  };

  const faqData = [
    {
      question: "What documents are required to rent a car?",
      answer:
        "To rent a car, you need a valid driver's license, a credit card in your name, and a valid ID or passport.",
    },
    {
      question: "Can I cancel my booking for free?",
      answer:
        "Yes, you can cancel your booking up to 24 hours before the rental period starts for free. After that, a cancellation fee may apply.",
    },
    {
      question: "Is there a mileage limit?",
      answer:
        "Our rentals come with unlimited mileage unless otherwise stated in the booking details.",
    },
    {
      question: "Can I return the car to a different location?",
      answer:
        "Yes, you can arrange a drop-off at a different location, but additional charges may apply.",
    },
    {
      question: "What should I do in case of an accident?",
      answer:
        "In case of an accident, contact us immediately. You should also notify the local authorities and fill out a police report.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="faq-container">
        <h1>Frequently Asked Questions</h1>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-question ${
              openQuestions.includes(index) ? "open" : ""
            }`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-title">{item.question}</div>
            {openQuestions.includes(index) && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FAQ;
