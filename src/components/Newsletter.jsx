import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = ({ target: { value } }) => {
    setEmail(value);
    if (value.includes("@")) {
      setError("");
    }
  };

  const validateEmail = (email) => {
    return email.includes("@");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      setEmail("");
      setError("");
    } else {
      setError("Email not valid");
    }
  };

  return (
    <section id="newsletter-section">
      <div className="newsletter-container">
        <div className="subscribe">
          <img src="src/assets/images/notification.svg" alt="" />
          <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
        </div>
        <form
          className="input"
          onSubmit={handleSubmit}
          // Stäng av webbläsarens inbyggda validering - JS 13/11/2024
          noValidate>
          <label htmlFor="emailInput">
            <img className="letter-img" src="src/assets/images/letter-input.svg" alt="" />
          </label>
          <input id="emailInput" className="input-box" type="email" placeholder="Your Email" value={email} onChange={handleEmailChange} />

          <button className="btn-primary btn-subscribe">Subscribe</button>
          {error && (
            <div className="error-message" style={{ color: "red", fontSize: ".8rem", width: "100px", alignSelf: "center", marginLeft: "1rem" }}>
              {error}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
