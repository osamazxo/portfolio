import Image from "next/image";
import React from "react";
import myPic from "@/assets/images/my-picture.jpg";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "React Query",
  "SCSS",
  "Tailwind CSS",
  "Material UI",
  "Node.js",
  "Express",
  "MongoDB",
  "Mongoose",
  "Git",
  "GitHub",
];
const About = () => {
  return (
    <div className="py-10 px-4 bg-[#faf8f8]" id="about">
      <div className="container flex gap-4 justify-between flex-wrap md:flex-nowrap">
        <div className="min-w-[320px] max-w-[700px] flex-shrink-[4]">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-lg  mb-8">
            I&apos;m a passionate and dedicated full-stack web developer
            specializing in the MERN stack (MongoDB, Express.js, React,
            Node.js). With extensive experience in both front-end and back-end
            development, I have a proven track record of building robust,
            scalable, and high-performance web applications.
          </p>
          <p className="text-xl font-bold mb-4">Tools</p>

          <ul className="flex gap-4 flex-wrap">
            {skills.map((skill) => (
              <li
                key={skill}
                className="px-2 py-1 bg-[#d5d5d5] text-gray-600 rounded-lg font-medium select-none text-nowrap"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden mx-auto md:mx-0 ">
          <Image
            src={myPic}
            alt="my picture"
            quality={100}
            height={400}
            width={300}
            style={{ minWidth: "300px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
