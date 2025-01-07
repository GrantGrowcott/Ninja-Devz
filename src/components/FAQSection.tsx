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
          <div className="category__info__container">
            <div className="movie__name">
              <h3>{faqs.question}</h3>
            </div>
            <button
              className="category__info__button"
              onClick={() => toggleDropdown(index)} 
            >
              <h3>+</h3>
            </button>
          </div>
          {/* Only render the dropdown menu if this movie's index is in dropdownRefs */}
          {dropdownRefs.current[index] && (
            <>
              <div className="dropdown__menu">
                <div className="dropdown__menu__container"></div>
              </div>
              <div className="synopsis__container">
                <h3>{faqs.answer} </h3>
              </div>
              <div className="movie__stats"></div>
              <div className="modify__container"></div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
