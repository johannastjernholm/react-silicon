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
            Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel.
            Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.
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
            Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit
            amet. Dictum pretium dolor tincidunt egestas eget nunc.
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
