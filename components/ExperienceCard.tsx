import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex bg-zinc-800 flex-col opacity-75 hover:opacity-100 transition-opacity duration-300 bg- hover:cursor-pointer text-gray-300 rounded-lg items-center justify-center space-y-7 flex-shrink-0 w-[400px] md:w-[400px] lg:w-[500px] snap-center p-10 ">
      <motion.img
        className="w-12 h-12 rounded-full xl:w-18 xl:h-18 object-cover object-center"
        src="./icons/pngegg.png"
      ></motion.img>
      <div className="px-0 md:px-10">
        <h4 className="uppercase text-lg tracking-wide">As a Freelancer</h4>
        <p className="text-gray-500">Work for myself</p>
        <div className="flex flex-row items-center justify-start mt-2 space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src="./icons/jslogo.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="./icons/html.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="./icons/css-3.png"
            alt=""
          />
          <img
            className="h-10 w-10 rounded-full"
            src="./icons/python.png"
            alt=""
          />
        </div>

        <ul className="list-disc space-y-4 ml-10 text-lg mt-2">
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
