// import React, { useState } from "react";
// import { motion, stagger, useAnimate } from "framer-motion";
// import mySelf from "/src/assets/mySelf.png"; // ✅ Correct image import

// import {
//   randomNumberBetween,
//   role,
//   description,
//   name,
//   personName,
// } from "./data/constants";
// import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

// const buttons = [
//   { id: 1, icon: <FaGithub />, name: "Github", link: "https://github.com/yourusername" },
//   { id: 2, icon: <FaFacebook />, name: "Facebook", link: "https://facebook.com/yourprofile" },
//   { id: 3, icon: <FaInstagram />, name: "Instagram", link: "https://instagram.com/yourusername" },
// ];

// const Hero = () => {
//   const [scope, animate] = useAnimate();
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isInView, setIsInView] = useState(false);

//   // Hover start
//   const onHoverStart = () => {
//     const sparkles = Array.from({ length: 20 });
//     const sparklesAnimation = sparkles.map((_, index) => [
//       `.sparkle-${index}`,
//       {
//         x: randomNumberBetween(-100, 100),
//         y: randomNumberBetween(-100, 100),
//         scale: randomNumberBetween(1.2, 2),
//         opacity: 1,
//       },
//       { duration: 0.3, at: "<" },
//     ]);
//     animate([
//       [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
//       [".button", { scale: 0.9 }, { duration: 0.1, at: "<" }],
//       ...sparklesAnimation,
//       [".letter", { y: 0 }, { duration: 0.3 }],
//     ]);
//   };

//   // Hover end
//   const onHoverEnd = () => {
//     const sparkles = Array.from({ length: 20 });
//     const sparkleFadeOut = sparkles.map((_, index) => [
//       `.sparkle-${index}`,
//       { opacity: 0, x: 0, y: 0 },
//       { duration: 0.3 },
//     ]);
//     animate([
//       [".button", { scale: 1 }, { duration: 0.1 }],
//       ...sparkleFadeOut,
//     ]);
//   };

//   return (
//     <div className="container max-w-screen-xl mx-auto px-4 text-white">
//       <section className="relative w-full mt-10">
//         <div className="w-full px-5 sm:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
//           <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24">

//             {/* LEFT SECTION */}
//             <div className="lg:py-6 z-[10] text-center lg:text-left">
//               <h6 className="mb-[15px] opacity-[70%] tracking-widest font-[300] text-[14px]">
//                 {role.map((letter, i) => (
//                   <motion.span
//                     initial={{ opacity: 0, y: 2 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.25, delay: i / 10 }}
//                     key={i}
//                   >
//                     {letter}
//                   </motion.span>
//                 ))}
//               </h6>

//               <h1 className="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl text-white">
//                 {name.map((word, i) => (
//                   <motion.span
//                     key={i}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ duration: 0.25, delay: i / 10 }}
//                   >
//                     {word}{" "}
//                   </motion.span>
//                 ))}
//                 <span className="text-transparent bg-clip-text bg-green-500">
//                   {personName.map((letter, i) => (
//                     <motion.span
//                       key={i}
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{
//                         duration: 0.25,
//                         delay: (name.length + i + 1) / 10,
//                       }}
//                     >
//                       {letter}
//                     </motion.span>
//                   ))}
//                 </span>
//               </h1>

//               <p className="text-[15px] opacity-[70%] font-[300] mt-[10px] text-center lg:text-left text-white">
//                 {description.map((word, i) => (
//                   <motion.span
//                     key={i}
//                     initial={{ opacity: 0, y: 2 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.25, delay: i / 10 }}
//                   >
//                     {word}{" "}
//                   </motion.span>
//                 ))}
//               </p>

//               {/* Buttons + Socials */}
//               <div className="flex mt-10 justify-center lg:justify-start items-center space-x-6">
//                 <div ref={scope}>
//                   <button
//                     onMouseEnter={onHoverStart}
//                     onMouseLeave={onHoverEnd}
//                     className="relative rounded-full border-2 border-green-500 px-6 py-2 text-green-500 transition z-[10] button"
//                   >
//                     <span className="sr-only">Hire Me</span>
//                     <span className="block h-8 overflow-hidden" aria-hidden="true">
//                       {["H", "i", "r", "e", " ", "m", "e"].map((letter, index) => (
//                         <span
//                           key={index}
//                           data-letter={letter}
//                           className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
//                         >
//                           {letter === " " ? "\u00A0" : letter}
//                         </span>
//                       ))}
//                     </span>

//                     {/* Sparkles */}
//                     <span
//                       aria-hidden
//                       className="pointer-events-none absolute inset-0 -z-10 block"
//                     >
//                       {Array.from({ length: 20 }).map((_, index) => (
//                         <svg
//                           key={index}
//                           className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
//                           viewBox="0 0 122 117"
//                           width={10}
//                           height={10}
//                         >
//                           <path
//                             className="fill-green-500"
//                             d="M64.39,2.8,80.11,38.76,120,42.33a2.3,2.3,0,0,1,1.83,5.59l-31.64,74.25L43.2,94.8,4.47,43.61A4,4,0,0,1,9.18,37.1L46.19,27.09,3.2,0Z"
//                           />
//                         </svg>
//                       ))}
//                     </span>
//                   </button>
//                 </div>

//                 {/* Socials */}
//                 <div className="flex items-center space-x-4">
//                   {buttons.map(({ id, icon, name, link }) => (
//                     <a
//                       key={id}
//                       href={link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="border-2 rounded-full p-2 border-green-500 text-2xl text-green-500 hover:scale-110 transition-transform"
//                       aria-label={name}
//                     >
//                       {icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT SECTION (IMAGE) */}
//             <div className="relative flex justify-center items-center">
//               {/* Green Blur Behind */}
//               <div className="absolute w-5/6 h-3/4 bg-green-500 blur-3xl rounded-full top-1/2 -translate-y-1/2 right-0 z-[1]" />

//               {/* Image */}
//               <motion.div
//                 initial={false}
//                 animate={
//                   isLoaded && isInView
//                     ? {
//                         WebkitMaskImage:
//                           "repeating-linear-gradient(to right,rgba(0,0,0,0.0) 0px,rgba(0,0,0,0.0) 0px,rgba(0,0,0,1) 30px)",
//                         maskImage:
//                           "repeating-linear-gradient(to right,rgba(0,0,0,0.0) 0px,rgba(0,0,0,0.0) 0px,rgba(0,0,0,1) 30px)",
//                       }
//                     : {
//                         WebkitMaskImage:
//                           "repeating-linear-gradient(to right,rgba(0,0,0,0.0) 30px,rgba(0,0,0,0.1) 30px,rgba(0,0,0,1) 30px)",
//                         maskImage:
//                           "repeating-linear-gradient(to right,rgba(0,0,0,0.1) 30px,rgba(0,0,0,0.1) 30px,rgba(0,0,0,1) 30px)",
//                       }
//                 }
//                 transition={{ duration: 1, delay: 1 }}
//                 onViewportEnter={() => setIsInView(true)}
//                 className="relative z-[5]" // ✅ Ensures image is above blur
//               >
//                 {isLoading && (
//                   <div className="flex justify-center items-center h-full text-green-500">
//                     Loading ...
//                   </div>
//                 )}
//                 <img
//                   src={mySelf}
//                   alt="My portrait"
//                   width={400}
//                   height="auto"
//                   onLoad={() => {
//                     setIsLoaded(true);
//                     setIsLoading(false);
//                   }}
//                   className="rounded-full object-cover"
//                 />
//               </motion.div>
//             </div>
//             {/* END RIGHT SECTION */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Hero;
















import React, { useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import myself from "/src/assets/myself.png"; // ✅ Correct image import

import {
  randomNumberBetween,
  role,
  description,
  name,
  personName,
} from "./data/constants";
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const buttons = [
  { id: 1, icon: <FaGithub />, name: "Github", link: "https://github.com/yourusername" },
  { id: 2, icon: <FaFacebook />, name: "Facebook", link: "https://facebook.com/yourprofile" },
  { id: 3, icon: <FaInstagram />, name: "Instagram", link: "https://instagram.com/yourusername" },
    { id: 3, icon: <FaWhatsapp />, name: "Whatsapp", link: "https://instagram.com/yourusername" },

];

const Hero = () => {
  const [scope, animate] = useAnimate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isInView, setIsInView] = useState(false);

  // Hover animation
const onHoverStart = () => {
  const sparkles = Array.from({ length: 20 });
  const isSmallScreen = window.innerWidth < 640; // detect mobile
  const range = isSmallScreen ? 50 : 100;

  const sparklesAnimation = sparkles.map((_, index) => [
    `.sparkle-${index}`,
    {
      x: randomNumberBetween(-range, range),
      y: randomNumberBetween(-range, range),
      scale: randomNumberBetween(1.2, 2),
      opacity: 1,
    },
    { duration: 0.3, at: "<" },
  ]);

  // ✅ make letters fly OUT of button on hover
  animate([
    [".letter", { y: -60 }, { duration: 0.25, delay: stagger(0.05) }],
    [".button", { scale: 0.9 }, { duration: 0.1, at: "<" }],
    ...sparklesAnimation,
  ]);
};

const onHoverEnd = () => {
  const sparkles = Array.from({ length: 20 });
  const sparkleFadeOut = sparkles.map((_, index) => [
    `.sparkle-${index}`,
    { opacity: 0, x: 0, y: 0 },
    { duration: 0.3 },
  ]);

  // ✅ instantly pull all letters back inside
  animate([
    [".letter", { y: 0 }, { duration: 0.25 }],
    [".button", { scale: 1 }, { duration: 0.1, at: "<" }],
    ...sparkleFadeOut,
  ]);
};

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden text-white">

      {/* ✅ FIXED FULLSCREEN GREEN BACKGROUND */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: isLoaded ? 0.3 : [1, 0.8, 1],
          scale: isLoaded ? 1.2 : [1, 1.05, 1],
        }}
        transition={{
          duration: isLoaded ? 2 : 3,
          repeat: isLoaded ? 0 : Infinity,
          ease: "easeInOut",
        }}
        className="fixed inset-0 bg-blue-400 blur-[200px] z-0"
      />

      <section className="relative w-full z-10">
        <div className="w-full px-6 sm:px-10 max-w-screen-xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 pt-24">

            {/* LEFT SECTION */}
            <div className="lg:py-6 z-[10] text-center lg:text-left">
              <h6 className="mb-[15px] opacity-[70%] tracking-widest font-[300] text-[14px]">
                {role.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i / 10 }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h6>

              <h1 className="pt-4 font-bold text-4xl md:text-5xl lg:text-6xl text-white">
                {name.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: i / 10 }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
                <span className="text-transparent bg-clip-text bg-blue-400">
                  {personName.map((letter, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.25,
                        delay: (name.length + i + 1) / 10,
                      }}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              </h1>

              <p className="text-[15px] leading-relaxed opacity-[70%] font-[300] mt-[10px] text-center lg:text-left text-white">
                {description.map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, delay: i / 10 }}
                  >
                    {word}{" "}
                  </motion.span>
                ))}
              </p>

              {/* Buttons + Socials */}
              <div className="flex mt-10 justify-center lg:justify-start items-center space-x-6">
                <div ref={scope}>
                  <button
                    onMouseEnter={onHoverStart}
                    onMouseLeave={onHoverEnd}
                    className="relative rounded-full border-2 border-blue-400 px-6 py-2 text-blue-400 transition z-[10] button"
                  >
                    <span className="sr-only sm:w-20">Hire Me</span>
                    <span className="block h-8 overflow-hidden" aria-hidden="true">
                      {["H", "i", "r", "e", " ", "m", "e"].map((letter, index) => (
                        <span
                          key={index}
                          data-letter={letter}
                          className="letter relative inline-block h-8 leading-8 after:absolute after:left-0 after:top-full after:h-8 after:content-[attr(data-letter)]"
                        >
                          {letter === " " ? "\u00A0" : letter}
                        </span>
                      ))}
                    </span>

                    {/* Sparkles */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 -z-10 block"
                    >
                      {Array.from({ length: 20 }).map((_, index) => (
                        <svg
                          key={index}
                          className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                          viewBox="0 0 122 117"
                          width={10}
                          height={10}
                        >
                          <path
                            className="fill-blue-400"
                            d="M64.39,2.8,80.11,38.76,120,42.33a2.3,2.3,0,0,1,1.83,5.59l-31.64,74.25L43.2,94.8,4.47,43.61A4,4,0,0,1,9.18,37.1L46.19,27.09,3.2,0Z"
                          />
                        </svg>
                      ))}
                    </span>
                  </button>
                </div>

                {/* Socials */}
                <div className="flex items-center space-x-4">
                  {buttons.map(({ id, icon, name, link }) => (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-2 rounded-full p-2 border-blue-400 text-2xl text-blue-400 hover:scale-110 transition-transform"
                      aria-label={name}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* ✅ RIGHT SECTION */}
            <div className="relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: isLoaded ? 1 : 0,
                  scale: isLoaded ? 1 : 0.9,
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                onViewportEnter={() => setIsInView(true)}
                className="relative z-[5]"
              >
                {isLoading && (
                  <div className="flex justify-center items-center h-full text-blue-400">
                    Loading ...
                  </div>
                )}
                <img
                  src={myself}
                  alt="My portrait"
                  width={100}
                  height={100}
                  onLoad={() => {
                    setIsLoaded(true);
                    setIsLoading(false);
                  }}
                  className="rounded-full border-4 border-blue-400 p-1 object-cover shadow-lg shadow-blue-500/40 w-56 sm:w-52 md:w-50 lg:w-56 "
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
