const Hero = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="headline">
            <h1>
              Manage All Your <br />
              Money in One App
            </h1>
          </div>
          <div className="content">
            <p>
              We offer you a new generation of the mobile banking. <br />
              Save, spend & manage your money in your pocket.
            </p>
            <div className="buttons">
              <a className="btn-download-app" href="#">
                <img src="src\assets\images\appstore-light.svg" alt="" />
              </a>
              <a className="btn-download-app" href="#">
                <img src="src/assets/images/googleplay-light.svg" alt="" />
              </a>
            </div>

            <a href="#" className="discover-more">
              <span className="btn-circle">
                <i className="fa-solid fa-chevron-down"></i>
              </span>
              <span>Discover more</span>
            </a>
          </div>
          <div className="images">
            <img className="img-back" src="src/assets/images/iphone-budget.svg" alt="iphone my budget" />
            <img className="img-front" src="src/assets/images/iphone-cards.svg" alt="iphone cards" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
