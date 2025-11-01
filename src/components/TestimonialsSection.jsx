import React from "react";
import { motion } from "framer-motion";
import {varients } from "./data/constants";
import brainwave from "../assets/Brainwave.png";


const Testimonials = [
  {
    id: 1,
    name: "John Doe",
    picture: brainwave,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, pariatur.",
  },
  {
    id: 2,
    name: "Jane Smith",
    picture: brainwave,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, pariatur.",
  },
  {
    id: 3,
    name: "Emily Doe",
    picture: brainwave,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, pariatur.",
  },
  {
    id: 4,
    name: "emjay sow",
    picture: brainwave,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, pariatur.",
  },
];

const TestimonialsSection = () => {
  return (
    <div id="testimonials" className="container max-w-screen-xl mx-auto px-4 mt-40">
      <motion.h1
        variants={varients}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        Testimonials
      </motion.h1>

      <motion.div
        className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20"
      >
        {Testimonials.map(({ id, name, picture, text }) => (
          <motion.div
            key={id}
            variants={varients}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="border-2 border-primary backdrop-blur-sm bg-white/30 p-8 rounded-3xl text-white"
          >
            
                {/* ⭐ Yellow Stars */}
            <div className="flex items-center mb-6 gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M12 .587l3.668 7.568L24 9.748l-6 5.853L19.335 24 12 19.897 4.665 24 6 15.601 0 9.748l8.332-1.593z" />
                </svg>
                
              ))}
            
              
            </div>

            <div className="flex items-center gap-4 mb-4">
              <img
                src={picture}
                alt={name}
                className="w-12 h-12 rounded-full object-cover border border-white/30"
              />
              <h3 className="font-semibold text-lg">{name}</h3>
            </div>

            <p className="text-sm text-white/80">{text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsSection;
