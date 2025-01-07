import { useState, useRef } from "react";
import { faqs } from "@/constants";

const FAQSection = () => {
  const [movies, setMovies] = useState([]);
  const dropdownRefs = useRef<boolean[]>([]);

  const toggleDropdown = (index: number) => {
    // Toggle the visibility state of the dropdown
    dropdownRefs.current[index] = !dropdownRefs.current[index];
    // Trigger a re-render by spreading the movies array
    setMovies([...movies]);
  };

  return (
    <div>
      {faqs.map((faqs, index) => (
        <div key={index}>
          <button className="category__info__container" onClick={() => toggleDropdown(index)}>
            <h3>{faqs.question}</h3>
            <span className="category__info__button">
              <h3>+</h3>
            </span>
          </button>

          {/* Only render the dropdown menu if this movie's index is in dropdownRefs */}
          {dropdownRefs.current[index] && (
            <>
              <div className="dropdown__menu"></div>
              <div className="synopsis__container">
                <h3>{faqs.answer} </h3>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
