import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  // const projects = [
  //   { title: "Sample Project", img: "./project.png" },
  //   { title: "Sample Project", img: "./project.png" },
  //   { title: "Sample Project", img: "./project.png" },
  //   { title: "Sample Project", img: "./project.png" },
  // ];
  return (
    <div className="h-screen flex flex-col px-10 md:flex-row justify-evenly items-center relative overflow-hidden">
      <h1 className="absolute top-20 text-xl text-gray-500 uppercase tracking-[20px]">
        Projects
      </h1>
      <div className="relative flex flex-col md:flex-row justify-between items-center overflow-x-scroll overflow-y-hidden z-20 snap-x snap-mandatory gap-4 scrollbar-thin scrollbar-track-gray-400/40 scrollbar-thumb-amber-400/30">
        {projects.map((prj, i) => {
          return (
            <div
              key={i}
              className="w-screen flex-shrink-0 flex flex-col items-center  snap-center justify-center p-20 h-[80vh] mt-10 md:p-36"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.2,
                }}
                viewport={{
                  once: true,
                }}
                className="h-[70%]"
                src={prj.image ? urlFor(prj.image)?.url() : "./project.png"}
                alt={prj.title}
              />
              <h2 className="">{`${prj.title} ${i + 1} of ${
                projects.length
              }`}</h2>
            </div>
          );
        })}
      </div>
      <div className="absolute top-[30%] w-full h-[350px] bg-[#F7AB0A]/10 -skew-y-12"></div>
    </div>
  );
}

export default Projects;
