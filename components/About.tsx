import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";

type Props = { pageInfo: PageInfo };

const About = ({ pageInfo }: Props) => {
  return (
    <div className="relative  h-screen flex flex-col md:flex-row text-center md:text-left items-center justify-evenly  text-gray-300">
      <h1 className="absolute top-20 text-xl text-gray-500 uppercase tracking-[20px]">
        About
      </h1>
      <motion.div className="max-w-lg">
        <p className="first-letter:text-4xl text-justify mx-8 md:mx-4">
          {/* I am Isuru Akalanka Cumaranathunga. Currently I am followinng computer
          engineering degree programme in university of Jaffna Sri Lanka. I am
          interested in areas like Full-stack web development, Artificial
          intelligence and machine learning, embedded programming and systems
          programming. */}
          {pageInfo.backgroundInformation}
        </p>
      </motion.div>
      <motion.div className="text-left">
        <h1 className=" text-xl">Qualifications</h1>
        <h2 className="ml-4">Education</h2>
        <ul className="ml-8">
          <li>
            <p>B.Sc. Computer Engineering Undergraduate</p>
          </li>
        </ul>
        <h2 className="ml-4">Certifications</h2>
        <ul className="ml-8">
          <li>
            <p>Deep learning specialization in Coursera</p>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
