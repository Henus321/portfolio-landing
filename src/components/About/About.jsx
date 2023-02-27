import React from "react";
import { FaGithub } from "react-icons/fa";
import { AboutContainer, Papers, Avatar } from "./About.styled";
import { Pin, Frame } from "../../styles/Shared.styled";
import pin from "../../assets/decoration/pin.png";
import { ABOUT } from "../../constants/content";

const About = () => {
  return (
    <>
      <Frame
        src="https://images.unsplash.com/photo-1625496235025-d783abf061c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2040&q=80"
        alt="wooden"
      />
      <AboutContainer>
        <h2>{ABOUT.basic.name}</h2>
        <span>{ABOUT.basic.position}</span>
        <div>
          <Avatar src={ABOUT.basic.avatar} alt="Portrait" />
          <a
            href={ABOUT.basic.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Pin
              rotate="35deg"
              top="-0.5rem"
              hue="-200deg"
              src={pin}
              alt="Pin"
            />
            <FaGithub /> Github
          </a>
        </div>
        <Papers>
          <div>
            <Pin
              rotate="-90deg"
              left="1rem"
              top="0.5rem"
              hue="10deg"
              src={pin}
              alt="Pin"
            />
            <Pin
              rotate="10deg"
              right="1rem"
              top="0.5rem"
              hue="-200deg"
              src={pin}
              alt="Pin"
            />
            <h3>{ABOUT.personal.title}</h3>
            <p>{ABOUT.personal.description}</p>
          </div>
          <div>
            <Pin
              rotate="260deg"
              top="0.5rem"
              hue="-150deg"
              src={pin}
              alt="Pin"
            />
            <h3>{ABOUT.experience.title}</h3>
            <p>{ABOUT.experience.description}</p>
          </div>
          <div>
            <Pin top="0" hue="10deg" src={pin} alt="Pin" />
            <h3>{ABOUT.education.title}</h3>
            <p>{ABOUT.education.description}</p>
          </div>
        </Papers>
      </AboutContainer>
      <Frame
        src="https://images.unsplash.com/photo-1625496235025-d783abf061c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2040&q=80"
        alt="wooden"
      />
    </>
  );
};

export default About;
