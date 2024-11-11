import { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const AccordionItem = ({ title, content }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="accordion-item" style={{ backgroundColor: `${isDarkMode ? "#151922" : ""}` }}>
      <button className="accordion-button" onClick={toggleAccordion} style={{ backgroundColor: `${isDarkMode ? "#151922" : ""}` }}>
        {title}
        <span className="icon-accordion">
          <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
        </span>
      </button>
      <div
        className="accordion-content"
        style={{
          maxHeight: isOpen ? "1000px" : "0",
        }}>
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = () => {
  const accordionData = [
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

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
