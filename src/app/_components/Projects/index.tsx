import React from "react";
import styles from "./projects.module.css";
import eduvation from "@/assets/eduvation/cover.png";
import safetySphere from "@/assets/safety_sphere/cover.png";
import tripma from "@/assets/tripma/cover.png";
import kasper from "@/assets/kasper/cover.png";
import wooster from "@/assets/wooster/cover.png";
import domino from "@/assets/domino/cover.png";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
const projects = [
  {
    id: "p10001",
    title: "Eduvation",
    description:
      "Learning hub that includes recorded courses, live workshops and focus groups",
    img: eduvation,
  },
  {
    id: "p10002",
    title: "Safety Sphere",
    description: "Smart Emergency Alert and Prevention System",
    img: safetySphere,
  },
  {
    id: "p10003",
    title: "Tripma",
    description: "Flight booking website built on React TS and SCSS",
    img: tripma,
  },
  {
    id: "p10004",
    title: "Domino",
    description: "",
    img: domino,
  },
  {
    id: "p10005",
    title: "Kasper",
    description: "",
    img: kasper,
  },
  {
    id: "p10006",
    title: "Wooster",
    description: "",
    img: wooster,
  },
];
const Projects = () => {
  return (
    <div id="projects" className="py-10 px-4 bg-[#faf8f8]">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-2">Projects</h2>
        <p className="text-lg mb-8">
          Here are some of the projects, I have worked on
        </p>
        <ul className="grid grid-cols-12 gap-4">
          {projects.map((project) => (
            <li
              key={project.title}
              className={clsx(
                "col-span-12 md:col-span-6 lg:col-span-4 rounded-lg overflow-hidden relative",
                styles["project-card"]
              )}
            >
              <Image
                className="transition-all duration-500 "
                src={project.img}
                alt={project.title}
                style={{
                  height: "260px",
                  objectFit: "cover",
                }}
              />
              <div
                className={clsx(
                  "opacity-0 invisible bg-indigo-800 text-white  absolute size-full left-0 top-0 z-50 p-6  flex justify-center items-center flex-col gap-6",
                  styles["details"]
                )}
              >
                <p className="text-xl text-center font-semibold">
                  {project.description}
                </p>
                <Link href={"/projects/" + project.id}>
                  <button className="transition-all py-2 px-6 rounded-full border-4 border-indigo-500 text-lg font-bold hover:border-transparent hover:bg-indigo-500">
                    View Project
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
