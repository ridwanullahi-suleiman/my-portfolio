import React, { useEffect, useState } from "react";
import { useScroll, motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

const ButtonToTop = () => {
  const { scrollYProgress } = useScroll();
  const [showButton, setShowButton] = useState(false);

  // Show button when user scrolls down past 20%
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      setShowButton(latest > 0.2);
    });
  }, [scrollYProgress]);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full 
                   bg-blue-400 text-white shadow-lg hover:bg-blue-500 hover:shadow-blue-400/50 
                   transition-all duration-300 ease-in-out"
      >
        <motion.div
          className="relative flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <svg width="50" height="50" viewBox="0 0 36 36">
            {/* Background circular path */}
            <path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="white"  // light blue background
              strokeWidth="2"
              strokeDasharray="100 100"
              strokeDashoffset="100"
            />

            {/* Animated scroll progress path */}
            <motion.path
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#3B82F6"  // blue-500 progress
              strokeWidth="2"
              strokeDasharray="100 100"
              strokeDashoffset="100"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>

          {/* Up arrow icon */}
          <FaArrowUp className="absolute text-xl" />
        </motion.div>
      </button>
    )
  );
};

export default ButtonToTop;
