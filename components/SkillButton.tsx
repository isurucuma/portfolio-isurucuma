import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  directionLeft?: boolean;
  skill: Skill;
};

function SkillButton({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="rounded-full border h-24 w-24 p-2 border-gray-500 object-cover filter group-hover:grayscale transition duration-300 ease-in-out"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        // src="icons/nodejs.png"
        src={urlFor(skill.image).url()}
      />
      <div className="absolute h-24 w-24 opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full flex items-center justify-center">
        <p className="text-black text-2xl font-bold">
          {String(skill.progress)}%
        </p>
      </div>
    </div>
  );
}

export default SkillButton;
