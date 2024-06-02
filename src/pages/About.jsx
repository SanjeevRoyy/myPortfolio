import React from "react";
import Lottie from "react-lottie";
import animationData from "../components/lottie.json";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="AboutDiv">
      <div>
        {/* <img src="img/about.jpg" alt="" /> */}
        <Lottie options={defaultOptions} height={260} width={260} />
      </div>
      <div className="Right">
        <h4 style={{ color: "blue", marginBottom: "10px" }}>ABOUT ME</h4>
        <h2>A dedicated Front-End Developer based in Kathmandu , Nepal</h2>
        <p>
          As a junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML,CSS,javaScript,React,Tailwind and SCSS . I excel in
          designing and maintaning responsive website that offer smooth user
          experience. My expertise lies in crafting dynamic,engaging interface
          through writting clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
