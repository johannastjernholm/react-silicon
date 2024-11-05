const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <a href="index.html" id="logo">
            {" "}
            <img src="src\assets\images\Logo.svg" alt="Silicon logo" />
          </a>
          <nav className="navbar">
            <a href="#" className="nav-link">
              Features{" "}
            </a>
          </nav>

          <div className="btn-toggle-switch" id="darkmode-toggle-switch">
            <span className="label">Dark Mode</span>
            <label htmlFor="darkmode-switch" className="toggle-switch">
              <input type="checkbox" id="darkmode-switch" />
              <span className="slider round"></span>
            </label>
          </div>

          <a href="#" className="btn-primary" id="auth-signin">
            <i className="fa-light fa-user"></i>
            <span>Sign in / up</span>
          </a>
          <button className="btn-mobile">
            <i className="fa-regular fa-bars"></i>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
