import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="border border-[#333333] absolute h-[200px] w-[200px] rounded-full mt-52 animate-ping  z-10" />
      <div className="border border-[#333333] absolute h-[300px] w-[300px] rounded-full mt-52  z-10" />
      <div className="border border-[#333333] absolute h-[500px] w-[500px] rounded-full mt-52  z-10" />
      <div className="border border-[#799d16] absolute h-[650px] w-[650px] rounded-full mt-52 animate-pulse  z-10" />
      <div className="border border-[#333333] absolute h-[800px] w-[800px] rounded-full mt-52  z-10" />
    </motion.div>
  );
}

export default BackgroundCircles;
