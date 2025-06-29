import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const HomeSection = () => {
  return (
    <div id="home" className="HomeDiv">
      
      <div className="LeftSection">
        <div className="TitleSec">
          <h1>Front-end Developer</h1> 
          <img src="img/wave.png" alt="" />
        </div>
        <p>
          Hi, I'm Sanjeev Ray. A Passionate Front-end Developer based in
          Kathmandu, Nepal
        </p>
        <div className="socialIcons">
          <a
            href="https://www.linkedin.com/in/sanjeev-ray-b9087924a/"
            target="blank"
          >
            <FaLinkedin  size={25} />
          </a>
          <a href="https://github.com/SanjeevRoyy" target="blank">
            <FaGithub size={25} />
          </a>
        </div>
        <div className="TechStack">
          <h4>Tech Stack</h4>
          <div className="vl"></div>
          <div className="TechStackIcons">
            <a href="https://html.com/" target="blank">
              <img src="icons/html.png" alt="" />
            </a>
            <a
              href="https://www.w3.org/Style/CSS/Overview.en.html"
              target="blank"
            >
              <img src="icons/css-3.png" alt="" />
            </a>
            <a href="https://www.javascript.com/" target="blank">
              <img src="icons/java-script.png" alt="" />
            </a>
            <a href="https://react.dev/" target="blank">
              <img src="icons/physics.png" alt="" />
            </a>
            <a href="https://sass-lang.com/" target="blank">
              <img src="icons/sass.png" alt="" />
            </a>
            <a href="https://redux.com/" target="blank">
              <img src="icons/redux.png" alt="" />
            </a>
            <a href="https://zustand.com/" target="blank">
              <img src="icons/zustand.jpeg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="RightSection">
        <img src="img/sanjeev.png" alt="" />
      </div>
    </div>
  );
};

export default HomeSection;
