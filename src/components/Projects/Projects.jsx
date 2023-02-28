import React from "react";
import {
  ProjectsContainer,
  Project,
  Information,
  Image,
  ImageContainer,
} from "./Projects.styled";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "../../constants/content";

const Projects = () => {
  return (
    <ProjectsContainer>
      {PROJECTS.map((project) => (
        <Project key={`${project.name}`}>
          <ImageContainer
            href={project.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image src={project.image} alt={project.name} />
          </ImageContainer>
          <Information>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>
              <span>Стак технологий:</span>
              <br />
              {project.stack}
            </p>
            <div>
              <a
                href={project.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub /> Code
              </a>
              <a href={project.link} rel="noopener noreferrer" target="_blank">
                Demo
              </a>
            </div>
          </Information>
        </Project>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
