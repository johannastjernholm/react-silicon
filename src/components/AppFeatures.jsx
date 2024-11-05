import React from "react";

const AppFeatures = () => {
  return (
    <>
      <section id="app-features">
        <div className="container">
          <img className="feature-image" src="src/assets/images/feature-img.svg" alt="Iphone showing transactions" />
          <div className="app-feature-text">
            <h1>App Features</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque
              volutpat ligula est. Mattis fermentum, at nec lacus.
            </p>
          </div>
          <div className="card-container">
            <div className="card" id="card-1">
              <img className="icon" src="src/assets/images/card-1.svg" alt="" />
              <div className="card-text">
                <h5>Easy Payments</h5>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
            <div className="card" id="card-2">
              <img className="icon" src="src/assets/images/card-2.svg" alt="" />
              <div className="card-text">
                <h5>Data Security</h5>
                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
              </div>
            </div>
            <div className="card" id="card-3">
              <img className="icon" src="src/assets/images/card-3.svg" alt="" />
              <div className="card-text">
                <h5>Cost Statistics</h5>
                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh..</p>
              </div>
            </div>
            <div className="card" id="card-4">
              <img className="icon" src="src/assets/images/card-4.svg" alt="" />
              <div className="card-text">
                <h5>Support 24/7</h5>
                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
              </div>
            </div>
            <div className="card" id="card-5">
              <img className="icon" src="src/assets/images/card-5.svg" alt="" />
              <div className="card-text">
                <h5>Regular Cashback</h5>
                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
            </div>
            <div className="card" id="card-6">
              <img className="icon" src="src/assets/images/card-6.svg" alt="" />
              <div className="card-text">
                <h5>Top Standards</h5>
                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppFeatures;
