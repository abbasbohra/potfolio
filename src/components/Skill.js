import React from "react";
import { motion } from "framer-motion";
import "./Skill.css"; // Import the new CSS file

const Skill = ({ skillName, progress }) => {
  return (
    <div className="skill">
      <h4>{skillName}</h4>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Skill;
