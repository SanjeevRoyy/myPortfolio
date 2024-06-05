import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="hamburger">
        <RxHamburgerMenu onClick={toggleNavbar} size={30} />
      </div>
      <div className={`NavbarDiv ${showNavbar ? "show" : ""}`}>
        <div>
          <h3>Sanjeev.dev</h3>
        </div>
        <div className="NavLinks">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/courses">
            About
          </Link>
          <Link className="link" to="/services">
            Project
          </Link>
          <Link className="link" to="/blog">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
