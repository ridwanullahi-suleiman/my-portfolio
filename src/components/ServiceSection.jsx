import React from "react";
import { motion } from "framer-motion";
import { services, varients } from "./data/constants";

const ServiceSection = () => {
  return (
    <div id="service" className="container max-w-screen-xl mx-auto px-4 mt-40">
      <motion.h1
        variants={varients}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.0 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center lg:text-left"
      >
        My Services
      </motion.h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-20">
        {services.map(({ id, tittle, src, description }) => (
          <motion.div
            key={id}
            variants={varients}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.0 }}
            className="border-2 border-blue-500 backdrop-blur-sm bg-white/10 p-8 rounded-3xl hover:bg-white/20 transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              {/* Blue background circle with icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#60A5FA]/20 border-3 border-[#60A5FA]">
                <img
                  src={src}
                  width={50}
                  height={50}
                  alt="services"
                  className="w-8 h-8 object-contain filter brightness-0 invert hue-rotate-[190deg] saturate-[10] opacity-90"
                />
              </div>

              <h3 className="text-xl font-semibold text-white ml-5">{tittle}</h3>
            </div>
            <p className="text-white">{description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSection;

