import { useState } from "react";
import { motion } from "framer-motion";
import { varients } from "./data/constants";
import brainwave from "../assets/Brainwave.png";
import dental from "../assets/Dental.png";
import caseI from "../assets/Case.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Brainwave AI",
      description:
        "An interactive AI-powered website built with React and Framer Motion.",
      picture: brainwave,
      tools: ["React", "Framer Motion", "TailwindCSS"],
      link: "https://brainwavyy.vercel.app/",
    },
    {
      id: 2,
      title: "Dental Care",
      description:
        "A clean, modern landing page for a dental service business.",
      picture: dental,
      tools: ["React", "TailwindCSS", "Framer Motion"],
      link: "https://dental-gules-seven.vercel.app/",
    },
    {
      id: 3,
      title: "Case Study UI",
      description:
        "Minimal and responsive UI case study project.",
      picture: caseI,
      tools: ["React", "CSS", "Framer Motion"],
    },
  ];

  const [[page], setPage] = useState([0, 0]);
  const projectIndex = ((page % projects.length) + projects.length) % projects.length;

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div id="projects" className="container max-w-screen-xl mx-auto mt-40 px-4">
      {/* Header */}
      <motion.h1
        variants={varients}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        My Projects
      </motion.h1>

      {/* Project Display */}
      <motion.div
        key={page}
        className="flex flex-col items-center mt-20 border-2 border-[#60A5FA] bg-white/20 backdrop-blur-sm p-8 rounded-xl shadow-md"
      >
        {/* Navigation */}
        <div className="w-full justify-between flex z-[100] relative mb-6">
          <button
            className="text-white text-3xl"
            onClick={() => paginate(-1)}
            aria-label="Previous Slide"
          >
            <img
              width={50}
              height={50}
              src="https://img.icons8.com/ios-filled/50/60A5FA/circled-chevron-left.png"
              alt="Previous"
            />
          </button>

          <button
            className="text-white text-3xl"
            onClick={() => paginate(1)}
            aria-label="Next Slide"
          >
            <img
              width={50}
              height={50}
              src="https://img.icons8.com/ios-filled/50/60A5FA/circled-chevron-right.png"
              alt="Next"
            />
          </button>
        </div>

        {/* Image */}
        <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-lg shadow-black/40 bg-gradient-to-b from-white/10 to-transparent p-[6px]">
          <a
            href={projects[projectIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={projects[projectIndex].picture}
              alt={projects[projectIndex].title}
              className="w-full md:max-w-[653px] md:h-[500px] object-cover rounded-lg scale-[0.99] hover:scale-100 transition-transform duration-300 ease-in-out cursor-pointer"
            />
          </a>
        </div>

        {/* Title & Description */}
        <h2 className="text-white text-3xl mt-4 font-semibold">
          {projects[projectIndex].title}
        </h2>
        <p className="text-white mt-2 text-lg text-center max-w-lg">
          {projects[projectIndex].description}
        </p>

        {/* Visit Button */}
        <a
          href={projects[projectIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#60A5FA] text-white font-semibold px-6 py-2 rounded-full hover:bg-white hover:text-[#60A5FA] transition duration-300"
        >
          Visit Project
        </a>

        {/* Tools */}
        <div className="text-[#60A5FA] text-md mt-3 font-bold">
          <strong className="mr-3">Tools:</strong>
          {projects[projectIndex].tools.join(", ")}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 z-[100] relative">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === projectIndex ? "bg-[#60A5FA]" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
