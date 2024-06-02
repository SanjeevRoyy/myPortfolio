import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <div className="PortfolioSec">
        <div className="TextHeading">
          <h4>Portfolio</h4>
          <h2>Each project is a unique piece of development</h2>
        </div>
      </div>
      <div className="ProjectSection">
        <img src="img/ecommerce.png" alt="" />
        <div className="ProjectDetails">
          <h3>Ecommerce Website</h3>
          <p>
            This is an e-commerce platform designed to provide users with a
            seamless online shopping experience for clothing. Our website allows
            users to browse, select, and purchase a wide range of clothing
            items, all from the comfort of their own homes..
          </p>
          <div className="Technology">
            <h3>React</h3>
            <h3>SCSS</h3>
          </div>
          <div className="Links">
            <div className="SameLinks">
              <h3>Code</h3>
              <FaGithub />
            </div>
            <div className="SameLinks">
              <h3>Live Demo</h3>
              <FaExternalLinkAlt/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
