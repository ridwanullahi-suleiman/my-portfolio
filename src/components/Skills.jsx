import React from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";

const SkillsSection = () => {
  const skills = [
    { id: 1, icon: "https://img.icons8.com/color/48/html-5.png" },
    { id: 2, icon: "https://img.icons8.com/fluency/48/css3.png" },
    { id: 3, icon: "https://img.icons8.com/fluency/48/javascript.png" },
    { id: 4, icon: "https://img.icons8.com/ultraviolet/48/react--v1.png" },
    { id: 5, icon: "https://img.icons8.com/color/48/tailwindcss.png" },
    { id: 6, icon: "https://img.icons8.com/fluency/48/figma.png" },
  ];

  return (
    <section className="mt-20 px-4 md:px-8 lg:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
        Skills & Tools
      </h2>

      {/* ✅ Floating icons always moving */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
        {skills.map(({ id, icon }) => (
          <motion.figure
            key={id}
            className="relative border-2 border-blue-400 backdrop-blur-sm bg-white/30 w-20 h-20 flex justify-center items-center rounded-full shadow-lg"
            animate={{ y: [0, -10, 0] }} // 👈 gentle up and down
            transition={{
              duration: 2 + Math.random(), // each slightly different
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <img
              src={icon}
              alt="skill"
              className="w-10 h-10 object-contain select-none"
            />
          </motion.figure>
        ))}
      </div>

      {/* ✅ Next Button */}
      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 border-2 border-blue-500 text-blue-400 px-6 py-3 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300">
          Next <FiChevronRight className="text-xl text-blue-400" />
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;
