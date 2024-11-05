const HowDoesItWork = () => {
  return (
    <>
      <section id="how-does-it-work">
        <div className="container">
          <h1>How Does It Work?</h1>

          <div className="image-container">
            <img id="my-budget-desktop" src="src/assets/images/my-budget-desktop.svg" alt="" />
            <img id="tablet-your-cards-img" src="src/assets/images/your-cards-left.svg" alt="" />
            <img id="desktop-your-cards" src="src/assets/images/desktop-your-cards.svg" alt="" />
            <img id="mobile-img" src="src/assets/images/transfer-mobile.svg" alt="" />

            <img id="tablet-transfer-right" src="src/assets/images/transfer-right.svg" alt="" />
            <img id="desktop-transfer-right" src="src/assets/images/desktop-transfer-right.svg" alt="" />
          </div>
          <div className="content">
            <h4 className="h4-desktop">Latest transaction history</h4>
            <h4 className="h4-tablet">Step 3. Transfers to people from your contact list</h4>
            <h4 className="h4-mobile">Transfers to people from your contact list</h4>
            <p>Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowDoesItWork;
