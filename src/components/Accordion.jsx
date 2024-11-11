import { useContext, useEffect, useState } from "react";
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
  const [accordionData, setAccordionData] = useState([]);

  const fetchAccordionData = async () => {
    const res = await fetch("https://win24-assignment.azurewebsites.net/api/faq");
    const data = await res.json();
    setAccordionData(data);
    console.log(data);
  };
  useEffect(() => {
    fetchAccordionData();
  }, []);

  return (
    <div className="accordion-container">
      {accordionData.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
