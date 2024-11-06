const Newsletter = () => {
  return (
    <section id="newsletter-section">
      <div className="newsletter-container">
        <div className="subscribe">
          <img src="src/assets/images/notification.svg" alt="" />
          <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
        </div>
        <div className="input">
          <label htmlFor="emailInput">
            <img className="letter-img" src="src/assets/images/letter-input.svg" alt="" />
          </label>
          <input id="emailInput" className="input-box" type="email" placeholder="Your Email" />
          <button className="btn-primary btn-subscribe">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
