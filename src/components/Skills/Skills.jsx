import React from "react";
import { SKILLS } from "../../constants/content";
import {
  SkillsContainer,
  SkillsBackground,
  SkillsEl,
  SkillsAdditionalEl,
  Icons,
} from "./Skills.styled";

const Skills = () => {
  return (
    <SkillsContainer>
      <SkillsBackground>
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
          {/* Temporary */}
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
