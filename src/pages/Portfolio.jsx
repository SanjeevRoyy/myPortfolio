import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "WEB CREATION",
    description:
      "A professional company website designed to showcase services, build brand presence, and engage potential clients. It provides essential business information and a modern user experience to create trust and drive conversions.",
    tech: ["React", "SCSS"],
    codeLink: "https://github.com/SanjeevRoyy/Cweb",
    liveLink: "https://cweb-ten.vercel.app/",
    image: "img/cweb.png",
  },
  {
    title: "GM FOOD",
    description:
      "An online food ordering website that allows users to explore menus, choose their favorite meals, and place orders quickly and conveniently. Ideal for restaurants and food delivery services.",
    tech: ["React", "Mantine"],
    codeLink: "https://github.com/SanjeevRoyy/food-web",
    liveLink: "https://food-web-phi-three.vercel.app/",
    image: "img/food.png",
  },
];

const Portfolio = () => {
  return (
    <>
      <div id="project" className="PortfolioSec">
        <div className="TextHeading">
          <h4 style={{ color: "blue" }}>PORTFOLIO</h4>
          <h2 style={{ marginTop: "10px" }}>
            Each project is a unique piece of development
          </h2>
        </div>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className={`ProjectSection ${index % 2 !== 0 ? "MarginUp" : ""}`}
        >
          {index % 2 === 0 ? (
            <>
              <img src={project.image} alt={project.title} />
              <div className="ProjectDetails">
                <h3 style={{ fontSize: "24px", fontWeight: "600" }}>
                  {project.title}
                </h3>
                <p>{project.description}</p>

                <div className="Technology">
                  {project.tech.map((tech, i) => (
                    <h3 key={i}>{tech}</h3>
                  ))}
                </div>
                <div className="Links">
                  <div className="SameLinks">
                    <p style={{ color: "black" }}>Code</p>
                    <a
                      style={{ color: "black" }}
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="SameLinks">
                    <p style={{ color: "black" }}>Live Demo</p>
                    <a
                      style={{ color: "black" }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="ProjectDetails">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="Technology">
                  {project.tech.map((tech, i) => (
                    <h3 key={i}>{tech}</h3>
                  ))}
                </div>
                <div className="Links">
                  <div className="SameLinks">
                    <p style={{ color: "black" }}>Code</p>
                    <a
                      style={{ color: "black" }}
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="SameLinks">
                    <p style={{ color: "black" }}>Live Demo</p>
                    <a
                      style={{ color: "black" }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <img src={project.image} alt={project.title} />
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default Portfolio;
