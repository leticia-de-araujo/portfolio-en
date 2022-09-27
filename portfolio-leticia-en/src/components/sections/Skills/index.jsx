import { SvgIcon, Tooltip } from "@mui/material";
import React from "react";
import { Fade } from "react-reveal";
import skills from "../../../data/skills";
import { SkillsDiv } from "./style";

const Skills = () => {
  return (
    <Fade duration={1000}>
      <SkillsDiv>
        <ul className="skills-ul">
          {skills?.map((skills) => {
            return (
              <Tooltip title={skills.skillName} key={skills.skillName}>
                <li>
                  <SvgIcon component={skills.img} />
                </li>
              </Tooltip>
            );
          })}
        </ul>
      </SkillsDiv>
    </Fade>
  );
};

export default Skills;
