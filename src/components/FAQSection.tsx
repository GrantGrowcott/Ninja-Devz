import { useState, useRef } from "react";
import { FAQProps } from "@/constants";

const FAQSection = ({ faqs}: FAQProps) => {
  const [faq, setFaq] = useState([]);
  const dropdownRefs = useRef<boolean[]>([]);

  const toggleDropdown = (index: number) => {
    dropdownRefs.current[index] = !dropdownRefs.current[index];
    setFaq([...faq]);
  };

  return (
    <div>
      {faqs.map((faqs, index) => (
        <div key={index}>
          <button className="category__info__container" onClick={() => toggleDropdown(index)}>
            <h3 className= "text-[var(--white)] text-xl">{faqs.question}</h3>
              <h4 className= "text-[var(--white)] text-xl">+</h4>
          </button>
          {dropdownRefs.current[index] && (
            <>
              <div className="dropdown__menu"></div>
              <div className="synopsis__container">
                <h3 className= "text-[var(--grey)]" >{faqs.answer}</h3>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
