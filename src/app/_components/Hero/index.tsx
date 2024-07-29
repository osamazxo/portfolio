import Button from "@/ui/Button";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="pt-56 pb-[7.5rem] px-4 text-center"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(245, 245, 245, 0.8), rgba(245, 245, 245, 0.8)), url(/images/bg.svg)",
      }}
    >
      <div>
        <p className="font-extrabold text-5xl uppercase">
          {"Hey, I'm Osama Safwat".split("").map((letter, index) => (
            <span
              key={letter + index}
              style={{
                opacity: 0,
                animation:
                  "appear 0.08s linear " + (0.1 + index * 0.08) + "s forwards",
              }}
            >
              {letter}
            </span>
          ))}
        </p>
        <p className="max-w-[560px] mx-auto text-lg mt-6 mb-8">
          {`A passionate and dedicated full-stack web developer specializing in the MERN stack With extensive experience in both front-end and back-end development.`
            .split("")
            .map((letter, index) => (
              <span
                key={letter + index}
                style={{
                  opacity: 0,
                  animation:
                    "appear 0.04s linear " + (2 + index * 0.04) + "s forwards",
                }}
              >
                {letter}
              </span>
            ))}
        </p>
        <Link
          href="#projects"
          style={{
            opacity: 0,
            animation: "appear 0.2s linear 8.2s forwards",
          }}
        >
          <Button>Projects</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
