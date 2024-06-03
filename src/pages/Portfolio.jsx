import React from "react";

import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  return (
    <>
      <div className="PortfolioSec">
        <div className="TextHeading">
          <h4 style={{ color: "blue" }}>PORTFOLIO</h4>
          <h2 style={{ marginTop: "10px" }}>
            Each project is a unique piece of development
          </h2>
        </div>
      </div>
      <div className="ProjectSection">
        <img src="img/ecommerce.png" alt="" />
        <div className="ProjectDetails">
          <h3>Ecommerce Website </h3>
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
              <p style={{ color: "black" }}>Code</p>
              <a
                style={{ color: "black" }}
                href="https://github.com/SanjeevRoyy/Ecommerce"
                target="blank"
              >
                <FaGithub />
              </a>
            </div>
            <div className="SameLinks">
              <p style={{ color: "black" }}>Live Demo</p>
              <a
                style={{ color: "black" }}
                href="https://ecommerce-one-jade-91.vercel.app/"
                target="blank"
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "120px" }} className="ProjectSection">
        <div className="ProjectDetails">
          <h3>Artyss</h3>
          <p>
            This website specializes in providing residential and commercial
            luxury interior solutions. It offers a comprehensive range of
            services and products tailored to meet the sophisticated tastes and
            high standards of discerning clients. The platform showcases
            exquisite interior designs and allows clients to explore and
            purchase premium interior solutions.
          </p>
          <div className="Technology">
            <h3>React</h3>
            <h3>SCSS</h3>
          </div>
          <div className="Links">
            <div className="SameLinks">
              <p style={{ color: "black" }}>Code</p>
              <a
                style={{ color: "black" }}
                href="https://github.com/SanjeevRoyy/office_work"
                target="blank"
              >
                <FaGithub />
              </a>
            </div>
            <div className="SameLinks">
              <p style={{ color: "black" }}>Live Demo</p>
              <a style={{color:"black"}} href="https://artyss-final.vercel.app/" target="blank">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
        <img src="img/artyss.png" alt="" />
      </div>
    </>
  );
};

export default Portfolio;
