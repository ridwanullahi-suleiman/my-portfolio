import { useState } from "react";
import { motion } from "framer-motion";
import { varients } from "./data/constants";
import brainwave from "../assets/Brainwave.png";


const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa laborum.",
      picture: brainwave,
      tools: ["React", "Framer Motion", "CSS"],
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa laborum.",
      picture: "/Brainwave.png",
      tools: ["React", "Framer Motion", "CSS"],
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi culpa laborum.",
      picture: "/Brainwave.png",
      tools: ["React", "Framer Motion", "CSS"],
    },
  ];

  const [[page], setPage] = useState([0, 0]);

  // ✅ Fixed index logic to avoid white screen (safe wrap)
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
        className="full flex flex-col items-center mt-20 border-2 border-primary bg-white/30 p-8 rounded-xl"
      >
        {/* Navigation Arrows */}
        <div className="w-full justify-between flex z-[100] relative mb-6">
          {/* Previous button */}
          <button
            className="text-white text-3xl"
            onClick={() => paginate(-1)}
            aria-label="Previous Slide"
          >
            <img
              width={50}
              height={50}
src="https://img.icons8.com/ios-filled/50/60A5FA/circled-chevron-left.png"              alt="Previous"
            />
          </button>

          {/* Next button */}
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

        {/* Project Image */}
        <div className="relative overflow-hidden rounded-xl border border-white/20 shadow-lg shadow-black/40 bg-gradient-to-b from-white/10 to-transparent p-[6px]">
  <img
    src={projects[projectIndex].picture}
    alt={projects[projectIndex].title}
    className="w-full md:max-w-[653px] md:h-[500px] object-cover rounded-lg scale-[0.99] hover:scale-100 transition-transform duration-300 ease-in-out"
  />
</div>


        {/* Project Title */}
        <h2 className="text-white text-3xl mt-4 font-semibold">
          {projects[projectIndex].title}
        </h2>

        {/* Project Description */}
        <p className="text-white mt-2 text-lg text-center max-w-lg">
          {projects[projectIndex].description}
        </p>

        {/* Tools Used */}
        <div className="text-primary text-md mt-2 font-bold">
          <strong className="mr-3">Tools :</strong>
          {projects[projectIndex].tools.join(", ")}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-10 z-[100] relative">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === projectIndex ? "bg-primary" : "bg-white/50"
              }`}
            ></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsSection;
