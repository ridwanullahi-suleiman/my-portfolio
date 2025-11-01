import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { randomNumberBetween, WhyMeTabs, VariantsA } from "./data/constants";
import ExperienceSection from "./ExperienceSection";
import EducationSection from "./EducationSection";
import SkillsSection from "./Skills";

export default function WhyMe() {
  const [selectedTab, setSelectedTab] = useState(WhyMeTabs[0]);
  const [sparkles, setSparkles] = useState([]);

  const onClickEffect = (index) => {
    const newSparkles = Array.from({ length: 20 }).map((_, sparkleIndex) => {
      const startX =
        (index + 0.5) * (100 / WhyMeTabs.length) + randomNumberBetween(-10, 10);
      const startY = randomNumberBetween(40, 70);
      const scale = randomNumberBetween(1, 3);

      return {
        id: sparkleIndex,
        style: {
          left: `${startX}%`,
          top: `${startY}%`,
          opacity: 1,
          transform: `translate(-50%, -50%) scale(${scale})`,
        },
      };
    });

    setSparkles(newSparkles);
    setTimeout(() => setSparkles([]), 600);
  };

  return (
    <div id="WhyMe" className="container mx-auto px-3 sm:px-6 mt-20 md:mt-40 z-10">
      <motion.div
        variants={VariantsA}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="rounded-lg overflow-hidden shadow-lg flex flex-col relative"
      >
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center md:text-left">
          Why Hire Me
        </h1>

        {/* Tabs Navigation */}
        <nav className="mb-8">
          <ul className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4 text-white">
            {WhyMeTabs.map((item, index) => (
              <li key={item.label} className="w-full sm:w-auto flex-1">
                <div
                  className={`flex justify-center items-center cursor-pointer border-2 border-primary 
                              bg-white/50 rounded-xl py-3 px-4 text-center transition-all duration-300
                              ${
                                item === selectedTab
                                  ? "bg-[#6661ca] font-bold text-white scale-[1.03]"
                                  : "hover:bg-[#6661ca]/70"
                              }`}
                  onClick={() => {
                    setSelectedTab(item);
                    onClickEffect(index);
                  }}
                >
                  {item.label}
                </div>
              </li>
            ))}
          </ul>
        </nav>

        {/* Tab Content */}
        <main className="flex justify-start items-start flex-grow text-base sm:text-lg md:text-2xl select-none min-h-[150px] px-2 sm:px-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab.label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-white w-full"
            >
              {selectedTab.label === "Experience" && <ExperienceSection />}
              {selectedTab.label === "Education" && <EducationSection />}
              {selectedTab.label === "Skills" && <SkillsSection/>}
            </motion.div>
          </AnimatePresence>
        </main>

        {/* Sparkles */}
        <div className="absolute inset-0 pointer-events-none z-[200]">
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute"
              style={{
                ...sparkle.style,
                position: "absolute",
                pointerEvents: "none",
              }}
              initial={{ opacity: 1 }}
              animate={{
                y: randomNumberBetween(-300, -200),
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
            >
              <svg
                className="fill-green-500"
                viewBox="0 0 122 117"
                width={8}
                height={8}
              >
                <path d="M64.39,2.8,80.11,38.76,120,42.33a2.3,2.3,0,0,1,1.83,5.59l-31.64,74.25L43.2,94.8,4.47,43.61A4,4,0,0,1,9.18,37.1L46.19,27.09,3.2,0Z" />
              </svg>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}



// // File: WhyMe.jsx

// import { motion, AnimatePresence } from "framer-motion";
// import { randomNumberBetween, WhyMeTabs, VariantsA } from "../data/constants";
// import React, { useState } from "react";

// export default function WhyMe() {
//   const [selectedTab, setSelectedTab] = useState(WhyMeTabs[0]);
//   const [sparkles, setSparkles] = useState([]);

//   const onClickEffect = (index) => {
//     const newSparkles = Array.from({ length: 20 }).map((_, sparkleIndex) => {
//       const startX = (index + 0.5) * (100 / WhyMeTabs.length) + randomNumberBetween(-10, 10);
//       const startY = randomNumberBetween(40, 70);
//       const scale = randomNumberBetween(1, 3);

//       return {
//         id: sparkleIndex,
//         style: {
//           left: `${startX}%`,
//           top: `${startY}%`,
//           opacity: 1,
//           transform: `translate(-50%, -50%) scale(${scale})`,
//         },
//       };
//     });

//     setSparkles(newSparkles);
//     setTimeout(()=>{
//          setSparkles([]);
//     },600)
//   };

//   return (
//     <div id="WhyMe" className="container max-w-screen-xl mx-auto px-4 z-10 mt-40">
//         <motion.h1
//                 variants={varients}
//                 initial="offscreen"
//                 whileInView="onscreen"
//                 viewport={{ once: true, amount: 0.5}}
//                 className="max-w-screen-xl mx-auto px-4 rounded-lg z-[100] overflow-hidden shadow-lg flex flex-col mt-20 relative"
//               >Why Hire Me
//                   <nav className="p-2 rounded-t-lg">
//   <ul className="flex w-full relative text-white">
//     {WhyMeTabs.map((item, index) => (
//       <li key={item.label}>
//         <div
//           className={`flex-1 cursor-pointer border-2 border-b-2 border-primary 
//                       bg-white/50 rounded-xl ml-2 p-2 
//                       ${item === selectedTab ? "bg-[#6661ca1] font-bold" : ""}`}

//                       onClick={()=>{
//                         setSelectedTab(item);
//                         onClickEffect(index)
//                       }}
//         >
//           {`${item.label}`}
//         </div>
//       </li>
//     ))}
//   </ul>
// </nav>
// <main className="flex justify-center items-center flex-grow text-5xl select-none">
//     <AnimatePresence mode="wait">
//         <motion.div 
//         key={selectedTab.label}
//         initial{{y:10,opacity:0}}
//         animate={{y:0,opacity:1}}
//         exit={{y:-10,opacity:0}}
//         transition={{duration:0.2}}
//          className="min-w-full"
//         >
//             {selectedTab.label ===}
//         </motion.div>
//     </AnimatePresence>
     
// </main>
//               </motion.h1>
          

//       {/* UI and sparkle rendering logic goes here */}
//     </div>
//   );
// }
