// // import { delay, px, stagger } from "framer-motion";
// // import { circle, clipPath } from "framer-motion/client";
// // import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
// import React from "react";

import { useState } from "react";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

// export const sidebarVarient = {
//     open :(height = 1000) => ({
//         clipPath : `circle(${height * 2 +200}px at 40px 40px)`,
//         transition :{
//             type : "spring",
//             stiffness :20,
//             restDelta :2,
//         }
//     }),

//     closed : {
//         clipPath:"circle(30px at 40px 40px)",
//         transition: {
//             delay : 0.5,
//             type:"spring",
//             stiffness:400,
//             damping:40,
//         }
//     }

// }
// export const menuItemVarient = {
//  open : {
//     y:0,
//     opacity :1,
//     transition:{
//         y:{ stiffness : 1000,velocity : -100},
//         duration:0.2
//     }
//  },
//  closed :{
//     transition:{
//         y:{stiffness : 1000}
//     }
//  }
// }
// export const navItems = [
//     {id:1,tittle:'Services',href:'services'},
//     {id:2,tittle:'Why hire',href:'whyme'},
//     {id:3,tittle:'Testimonials',href:'projects'},
//     {id:4,tittle:'montact me',href:'testimonials'},
// ];

// export const navVarients = {
//     open:{
//         transition: {
//             staggerChildren :0.07, delayChildren:0.2,
//         },
//     },
//      closed:{
//         transition: {
//             staggerChildren :0.05, delayChildren:-1,
//         },
//     }
// }
// src/components/data/constants.js

//Navbar dection  variable
export const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};


// Hero section Variable

export const randomNumberBetween = (min,max)=>{
  return Math.floor(Math.random()*(max-min + 1) +min);
};
export const role = "WEBSITE DEVELOPER".split("");
export const description = "I’m a developer, passionate about building fast, modern, and user-focused web experiences and Crafting responsive and efficient web solutions with clean code".split("")
export const name = "Hello, i'm".split("")
export const personName = "DevRid".split("")




// services section Variable

export const services = [
  {
    id: 1,
    tittle: "Web Development",
    src: "https://img.icons8.com/ios/50/66c61c/web-design.png",
    description: "I build responsive and fast web applications using React, Next.js, and Tailwind CSS."
  },
  {
    id: 2,
    tittle: "UI/UX Design",
    src: "https://img.icons8.com/ios/50/66c61c/design.png",
    description: "I design clean, user-friendly interfaces and experiences."
  },
  {
    id: 3,
    tittle: "Backend Development",
    src: "https://img.icons8.com/ios/50/66c61c/cloud-database.png",
    description: "I create scalable APIs and integrate backend services using Node.js and MongoDB."
  }
];


export const varients = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 1.2,
    },
  },
};


//contact section Variable
export const contactText1 =  "Let's make your brand brilliant!".split(" ");

// Whyme section Variable

// File: src/components/data/constants.js

// Random number helper


// Tabs for "Why Hire Me" section
export const WhyMeTabs = [
  { label: "Experience", content: "Experience" },
  { label: "Education", content: "Education" },
  { label: "Skills", content: "Skills" },
];

// Animation variant for the motion wrapper
export const VariantsA = {
  offscreen: { y: 100, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8,
    },
  },
};
// Experience section data
export const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "TechNova Solutions",
    period: "2022 — Present",
    description:
      "Developing and maintaining user-friendly web applications using React, Tailwind CSS, and Framer Motion. Collaborated with designers and backend teams to build smooth interfaces.",
    icon: "https://img.icons8.com/ios/50/66c61c/source-code.png",
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Creative Spark Studio",
    period: "2021 — 2022",
    description:
      "Designed modern and responsive web interfaces, improving usability and aesthetics using Figma, Adobe XD, and user-centered principles.",
    icon: "https://img.icons8.com/ios/50/66c61c/design--v1.png",
  },
  {
    id: 3,
    role: "Intern Backend Developer",
    company: "DataForge Tech",
    period: "2020 — 2021",
    description:
      "Built RESTful APIs using Node.js and Express, managed MongoDB databases, and implemented authentication with JWT.",
    icon: "https://img.icons8.com/ios/50/66c61c/database--v1.png",
  },
];



// const [sellectedTab,setSellectedTab]= useState(WhyMeTable);
//   const [sparkles,setSparkles]= useState([]);

//   const onclickEffect =(index) =>{
//      const newSparkles = Array.from({length : 20}).map((_.sparkleIndex) =>{})
//   }