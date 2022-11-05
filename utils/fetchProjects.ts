import { Project } from "../typings";

export const fetchProjects = async function () {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getProjects`);
  const data = await res.json();

  const projects: Project[] = data;
  console.log(projects);
  return projects;
};
