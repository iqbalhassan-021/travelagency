import React from 'react';


const Navbar = ({backgroundColor}) => {
  return (
    <div className="container header" id="navbar" style={{backgroundColor}}>
      <div className="body-cover">
        <div className="navbar">
          {/* Logo Section */}
          <div className="tab logo-holder">
            <a href="#" className="no-decoration">
              <img
                src="assets/images/stars_logo_white.png"
                alt="logo"
                className="logo"
                id="logo"
              />
            </a>
            <a className="bars">
              <i className="fa-solid fa-bars"></i>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="tab buttons-holder">
            {[
              "Home",
              "About",
              "Contact",
              "Tickets",
              "Appointment",
              "Visa",
            ].map((item) => (
              <a key={item} href="#" className="no-decoration nav-button">
                <p>{item}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
