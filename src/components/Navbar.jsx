import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const toggleNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  //make navbar hidden when clicked 
  const hideNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <>
      <div className="hamburger" onClick={toggleNavbar}>
        {showNavbar ? <RxCross1 size={25} /> : <RxHamburgerMenu size={25} />}
      </div>
      <div className={`NavbarDiv ${showNavbar ? "show" : ""}`}>
        <div className="NavLinks" onClick={hideNavbar}>
          <a href="#home" className="link">
            Home
          </a>
          <a href="#about" className="link">
            About
          </a>
          <a href="#project" className="link">
            Project
          </a>
          <a href="#contact" className="link">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
