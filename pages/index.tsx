import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import styles from "../styles/Home.module.css";
import { PageInfo, Project, Skill, Social } from "../typings";
import { fetchPageInfo } from "../utils/fetchPageInfo";
import { fetchProjects } from "../utils/fetchProjects";
import { fetchSkills } from "../utils/fetchSkills";
import { fetchSocials } from "../utils/fetchSocials";

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home = ({ pageInfo, skills, projects, socials }: Props) => {
  return (
    <div className="bg-zinc-900 overflow-x-hidden text-gray-200 h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-gray-400/40 scrollbar-thumb-amber-400/30">
      <Head>
        <title>Isuru_Cumaranathunga portfolio</title>
      </Head>
      {/* <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section> */}
      {/* <section id="experience" className="snap-center">
        <Experience />
      </section> */}
      {/* <section id="skills" className="snap-center">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-center">
        <Projects projects={projects} />
      </section> */}
      <section id="contactme" className="snap-center">
        <ContactMe />
      </section>
    </div>
  );
};

export default Home;

// export const getStaticProps: GetStaticProps<Props> = async function () {
//   // const pageInfo: PageInfo = await fetchPageInfo();
//   // const skills: Skill[] = await fetchSkills();
//   // const projects: Project[] = await fetchProjects();
//   // const socials: Social[] = await fetchSocials();

//   return {
//     props: {
//       // pageInfo,
//       // skills,
//       // projects,
//       // socials,
//     },

//     revalidate: 10,
//   };
// };
