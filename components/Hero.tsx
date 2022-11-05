import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = { pageInfo: PageInfo };

function Hero({ pageInfo }: Props) {
  console.log(pageInfo);
  const [text, count] = useTypewriter({
    // words: [
    //   "Hello I am Isuru Cumaranathunga",
    //   "Full-stack Developer",
    //   "AI Lover",
    //   "Content Creator",
    // ],
    words: pageInfo.interests,
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col justify-center space-y-8 items-center text-center">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto"
        src="iac_compressed.jpg"
        alt="isuru akalanka image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-700 pb-2 tracking-[16px]">
          Computer Engineer
        </h2>
        <h1>
          <span className="text-5xl lg:text-6xl font-semibold">{text}</span>
          <Cursor cursorColor="#884510" />
        </h1>
      </div>
      <div className="z-20">
        <Link href="#about">
          <button className="herobutton">About</button>
        </Link>

        <Link href="#experience">
          <button className="herobutton">Experience</button>
        </Link>

        <Link href="#skills">
          <button className="herobutton">Skills</button>
        </Link>

        <Link href="#projects">
          <button className="herobutton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
