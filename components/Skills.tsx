import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import SkillButton from "./SkillButton";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div className="min-h-screen relative flex flex-col justify-evenly items-center">
      <h1 className="absolute top-20 text-xl text-gray-500 uppercase tracking-[20px]">
        Skills
      </h1>
      <h2 className="uppercase text-gray-600 text-sm top-32 mx-0 tracking-widest absolute">
        hover over a skill for current proficiency
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillButton key={index} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
