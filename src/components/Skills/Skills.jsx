import React from "react";
import { SKILLS } from "../../constants/content";
import {
  SkillsContainer,
  SkillsBackground,
  SkillsEl,
  SkillsAdditionalEl,
  Icons,
} from "./Skills.styled";
import tape from "../../assets/decoration/tape.png";
import { Pin } from "../../styles/Shared.styled";

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsBackground>
        <Pin
          rotate="-45deg"
          top="-2rem"
          left="-8rem"
          size="13rem"
          src={tape}
          alt="Tape"
        />
        <Pin
          rotate="65deg"
          scale="-1"
          top="-2rem"
          right="-10rem"
          size="13rem"
          src={tape}
          alt="Tape"
        />
        <SkillsEl>
          <h3>{SKILLS.primary.title}</h3>
          <ul>
            {SKILLS.primary.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SkillsEl>
        <SkillsEl>
          <h3>{SKILLS.secondary.title}</h3>
          <ul>
            {SKILLS.secondary.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SkillsEl>
        <SkillsEl>
          <h3>{SKILLS.layout.title}</h3>
          <ul>
            {SKILLS.layout.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SkillsEl>
        <Icons>
          {[
            ...SKILLS.primary.icons,
            ...SKILLS.secondary.icons,
            ...SKILLS.layout.icons,
          ].map((icon, index) => React.createElement(icon, { key: index }))}
        </Icons>
        <SkillsAdditionalEl>
          <h3>{SKILLS.additional.title}</h3>
          <ul>
            {SKILLS.additional.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SkillsAdditionalEl>
      </SkillsBackground>
    </SkillsContainer>
  );
};

export default Skills;
