import Accordion from "./Accordion";

const Faq = () => {
  return (
    <>
      <section id="faq-section">
        <div className="faq-container">
          <div className="contact-container">
            <div className="text-box">
              <h2>
                Any questions? <br />
                Check out the FAQs
              </h2>
              <p>Still have unanswered questions and need to get in touch?</p>
            </div>
            <div className="phone-box">
              <img src="src/assets/images/phone-contact-us.svg" alt="" />
              <p>Still have questions?</p>
              <a href="#" className="blue">
                {" "}
                Contact us <i className="fa-sharp fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="chat-box">
              <img src="src/assets/images/chat-icon.svg" alt="" />
              <p>Don&apos;t like phone calls?</p>
              <a href="#" className="green">
                Contact us <i className="fa-sharp fa-solid fa-arrow-right"></i>{" "}
              </a>
            </div>
          </div>
        </div>
        <Accordion />
      </section>
    </>
  );
};

export default Faq;
