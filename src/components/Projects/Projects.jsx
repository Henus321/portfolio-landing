import React from "react";
import { Project, ProjectsContainer } from "./Projects.styled";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../../constants/content";

const Projects = () => {
  return (
    <ProjectsContainer>
      <Project>
        <img src={PROJECTS.first.image} alt={PROJECTS.first.name} />
        <div>
          <h3>{PROJECTS.first.name}</h3>
          <p>{PROJECTS.first.description}</p>
          <button>
            <FaGithub /> Code
          </button>
          <button>Demo</button>
        </div>
      </Project>
      <Project>
        <img src={PROJECTS.second.image} alt={PROJECTS.second.name} />
        <div>
          <h3>{PROJECTS.second.name}</h3>
          <p>{PROJECTS.second.description}</p>
          <button>
            <FaGithub /> Code
          </button>
          <button>Demo</button>
        </div>
      </Project>
    </ProjectsContainer>
  );
};

export default Projects;
