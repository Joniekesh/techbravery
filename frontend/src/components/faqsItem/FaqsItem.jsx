import "./faqsItem.scss";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

const FaqsItem = ({ index, faq, activeIndex, setActiveIndex, open }) => {
  const toggleFAQ = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };
  return (
    <div
      key={index}
      className={`faqs-item ${activeIndex === index ? "active" : ""}`}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faqs-question">
        <span className="q-text">{faq.question}</span>
        {open ? (
          <FaCaretUp className="fq-icon" />
        ) : (
          <FaCaretDown className="fq-icon" />
        )}
      </div>
      <div className="faqs-answer">{faq.answer}</div>
    </div>
  );
};

export default FaqsItem;
