import React from "react";
import { BiBriefcase } from "react-icons/bi";

const experiences = [
  {
    id: 1,
    duration: "Personal Project • 2023",
    company: "Brain Wave Website",
    post: "Front-End Developer",
  },
  {
    id: 2,
    duration: "Personal Project • 2024",
    company: "Clinic Website",
    post: "Front-End Developer",
  },
  {
    id: 3,
    duration: "Personal Project • 2025",
    company: "Phone Case Site",
    post: "Full stack Developer",
  },
];

const ExperienceSection = () => {
  return (
    <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
      {experiences.map(({ id, duration, company, post }) => (
        <div
          className="border-2 border-blue-400 backdrop-blur-sm text-white bg-white/30 p-8 rounded-3xl transition-transform transform hover:-translate-y-2 hover:bg-white/40"
          key={id}
        >
          <div className="flex items-center">
            <span className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full">
              <BiBriefcase className="text-2xl text-blue-400" />
            </span>
            <h3 className="text-xl font-semibold text-white ml-4">{post}</h3>
          </div>
          <p className="text-base mt-5">{duration}</p>
          <p>{company}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
