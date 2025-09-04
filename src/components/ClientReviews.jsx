const ClientReviews = () => {
  return (
    <>
      <section className="client-reviews">
        <div className="left">
          <h2>Clients are Loving Our App</h2>
        </div>
        <div className="middle">
          <img className="square-quote" src="src/assets/images/quotes.svg" alt="" />
          <img className="img-stars" src="src/assets/images/rating1.svg" alt="" />
          <p className="review-content">
            I’ve used this banking service several times to send money and I’m truly impressed. Transfers are fast, and I can track everything
            directly in the app. It feels safe and simple, even when I send larger amounts abroad. Customer support is quick to respond and always
            helpful whenever I have questions.
          </p>
          <div className="user-container">
            <img src="src/assets/images/fannie.svg" alt="" />
            <div className="user-details">
              <p className="user-name">Fannie Summers</p>
              <p className="user-role">Designer</p>
            </div>
          </div>
        </div>
        <div className="right">
          <img className="square-quote" src="src/assets/images/quotes.svg" alt="" />

          <img className="img-stars" src="src/assets/images/rating2.svg" alt="" />
          <p className="review-content">
            The best part about this service is how smooth the process is. Fees are clear and transparent, so I never have to worry about hidden
            costs. The app is user-friendly, and transfers are completed within minutes. I highly recommend this bank to anyone who wants a secure way
            to send money.
          </p>
          <div className="user-container">
            <img src="src/assets/images/albert.svg" alt="" />
            <div className="user-details">
              <p className="user-name">Albert Flores</p>
              <p className="user-role">Developer</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientReviews;
