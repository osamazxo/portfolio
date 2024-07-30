import React from "react";
const projects = [
  {
    title: "Eduvation",
    description: "",
    img: "",
  },
  {
    title: "Safety Sphere",
    description: "",
    img: "",
  },
  {
    title: "Tripma",
    description: "",
    img: "",
  },
  {
    title: "Domino",
    description: "",
    img: "",
  },
  {
    title: "Kasper",
    description: "",
    img: "",
  },
  {
    title: "Wooster",
    description: "",
    img: "",
  },
];
const Projects = () => {
  return (
    <div id="projects" className="py-10 px-4 bg-[#faf8f8]">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-lg mb-4">
          Here are some of the projects, I have worked on
        </p>
        <ul className="grid grid-cols-12 gap-4">
          {projects.map((project) => (
            <li
              key={project.title}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              {project.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
