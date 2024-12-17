import React from "react";
import Skill from "./Skill";

const SkillList = () => {
  const skills = [
    { name: "React Native", progress: 90 },
    { name: "Redux", progress: 85 },
    { name: "JavaScript", progress: 80 },
    { name: "Firebase", progress: 70 },
  ];

  return (
    <div>
      <h2>My Skills</h2>
      {skills.map((skill, index) => (
        <Skill key={index} skillName={skill.name} progress={skill.progress} />
      ))}
    </div>
  );
};

export default SkillList;
