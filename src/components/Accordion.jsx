import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

// Hårdkodade FAQ-poster (byt/utöka som du vill)
const FAQS = [
  {
    title: "Is any of my personal information stored in the App?",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti.",
  },
  {
    title: "What formats can I download my transaction history in?",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    title: "Can I schedule future transfers?",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis voluptatem deleniti provident ducimus laboriosam.",
  },
  {
    title: "When can I use Banking App services?",
    content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ex nostrum laborum qui quos doloremque.",
  },
  {
    title: "Can I create my own password that is easy for me to remember?",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nostrum!",
  },
  {
    title: "What happens if I forget or lose my password?",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis suscipit quasi, quia aliquid voluptate fugit alias.",
  },
];

const AccordionItem = ({ id, title, content }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div className="accordion-item" style={{ backgroundColor: isDarkMode ? "#151922" : undefined }}>
      <button
        className="accordion-button"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={`panel-${id}`}
        id={`accordion-header-${id}`}
        style={{ backgroundColor: isDarkMode ? "#151922" : undefined }}>
        {title}
        <span className="icon-accordion" aria-hidden="true">
          <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </span>
      </button>

      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`accordion-header-${id}`}
        className="accordion-content"
        style={{
          overflow: "hidden",
          maxHeight: isOpen ? "1000px" : "0",
          transition: "max-height 250ms ease",
        }}>
        <p style={{ margin: isOpen ? "1rem" : "0 1rem" }}>{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items = FAQS }) => {
  return (
    <div className="accordion-container">
      {items.map((item, index) => (
        <AccordionItem key={index} id={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
