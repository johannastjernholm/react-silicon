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
        <div className="accordion-container">
          <div className="accordion-item">
            <button className="accordion-button">
              Is any of my personal information stored in the App?
              <span className="icon-accordion">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, corrupti.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">
              What formats can I download my transaction history in?
              <span className="icon-accordion">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">
              Can I schedule future transfers?
              <span className="icon-accordion">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis voluptatem deleniti provident ducimus laboriosam dolore dignissimos
                officiis quaerat similique voluptate!
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">
              When can I use Banking App services?
              <span className="icon-accordion">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure ex nostrum laborum qui quos doloremque.</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">
              Can I create my own password that is easy for me to remember?
              <span className="icon-accordion">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </button>
            <div className="accordion-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, nostrum!</p>
            </div>
          </div>
          <div className="accordion-item">
            <button className="accordion-button">
              What happens if I forget or lose my password?
              <span className="icon-accordion">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </button>
            <div className="accordion-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis suscipit quasi, quia aliquid voluptate fugit alias harum itaque atque
                possimus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
