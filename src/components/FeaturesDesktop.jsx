const FeaturesDesktop = () => {
  return (
    <>
      <section id="features-desktop" className="container">
        <div className="div1">
          <h2>
            Make your money <br />
            transfer simple and clear
          </h2>
          <div className="row">
            <i className="fa-regular fa-circle-check"></i>
            <p>Banking transactions are free for you</p>
          </div>
          <div className="row">
            <i className="fa-regular fa-circle-check"></i>
            <p>No monthly cash commission</p>
          </div>
          <div className="row">
            <i className="fa-regular fa-circle-check"></i>
            <p>Manage payments and transactions online</p>
          </div>
          <a href="#" className="btn-primary">
            <span className="learn-more">Learn more</span>
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="div2">
          <img className="large-back" src="src/assets/images/img-row1.svg" alt="" />
          <img className="small-front" src="src/assets/images/contacts-row1.svg" alt="" />
        </div>
        <div className="div3">
          <img className="large-back" src="src/assets/images/img-row2.svg" alt="" />
          <img className="small-front" src="src/assets/images/card-row2.svg" alt="" />
        </div>
        <div className="div4">
          <h2>Receive payment from international bank details</h2>
          <img className="icon icon1" src="src/assets/images/card-1.svg" alt="" />
          <img className="icon icon2" src="src/assets/images/card-5.svg" alt="" />
          <p className="p1">Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
          <p className="p2">A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
          <a href="#" className="btn-primary">
            <span className="learn-more">Learn more</span>
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </section>
    </>
  );
};

export default FeaturesDesktop;
