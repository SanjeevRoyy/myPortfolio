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
          <a href="#home"  className="link" >
            Home
          </a>
          <a href="#about" className="link" >
            About
          </a>
          <a href="#project" className="link" >
            Project
          </a>
          <a href="#contact" className="link" to="/blog">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
