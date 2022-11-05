import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
  return (
    <div className="relative overflow-hidden h-screen flex flex-col text-left max-w-full px-10 items-center justify-evenly mx-0">
      <h1 className="absolute top-20 text-xl text-gray-500 uppercase tracking-[20px]">
        Experience
      </h1>
      <motion.div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-amber-400/30">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </motion.div>
    </div>
  );
}

export default Experience;
