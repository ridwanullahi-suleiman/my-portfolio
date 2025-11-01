
// // NavBar.jsx
// // NavBar.jsx
// import React, { useRef } from "react";
// import { motion, useCycle } from "framer-motion";
// // import { useDimension } from "./useDimension";
// import { useDimension } from "./data/use-dimensions";

// const sidebarVariants = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

// const MenuToggle = ({ toggle }) => (
//   <button
//     onClick={toggle}
//     className="absolute top-5 left-5 w-[40px] flex items-center justify-center"
//   >
//     <motion.div
//       animate={{ rotate: 0 }}
//       className="bg-white w-6 h-1 rounded mb-1"
//     />
//     <motion.div
//       animate={{ rotate: 0 }}
//       className="bg-white w-6 h-1 rounded mb-1"
//     />
//     <motion.div
//       animate={{ rotate: 0 }}
//       className="bg-white w-6 h-1 rounded"
//     />
//   </button>
// );

// const NavBar = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef(null);
//   const { height } = useDimension(containerRef);

//   return (
//     <motion.nav
//       className="fixed top-0 left-0 w-full h-full bg-black text-white"
//       initial={false}
//       animate={isOpen ? "open" : "closed"}
//       custom={height}
//       ref={containerRef}
//     >
//       <motion.div
//         className="absolute top-0 left-0 w-64 h-full bg-black/70 backdrop-blur-md"
//         variants={sidebarVariants}
//       >
//         <ul className="mt-20 space-y-4 p-4">
//           <li>Home</li>
//           <li>Projects</li>
//           <li>Contact</li>
//         </ul>
//       </motion.div>

//       <MenuToggle toggle={() => toggleOpen()} />
//     </motion.nav>
//   );
// };

// export default NavBar;



// src/components/NavBar.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, title: "Home", href: "#" },
    { id: 2, title: "About", href: "#" },
    { id: 3, title: "Services", href: "#" },
    { id: 4, title: "Contact", href: "#" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className="fixed top-0 left-0 h-screen w-fit z-50 ">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 left-4 z-[999] p-3 bg-[#60A5FA] rounded-full shadow-lg hover:scale-105 transition"
      >
        {isOpen ? (
          // X icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          // Hamburger icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        )}
      </button>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
            className="fixed top-0 left-0 h-full backdrop:blur-10 w-64 bg-[#111] text-white shadow-2xl p-6 flex flex-col justify-between z-[998]"
          >
            <ul className="space-y-6 mt-12">
              {navItems.map((item) => (
                <motion.li
                  key={item.id}
                  whileHover={{ scale: 1.05, x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={item.href}
                    className="block text-lg font-semibold text-gray-300 hover:text-[#66c61c] transition"
                  >
                    {item.title}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="text-gray-400 text-sm">
              <p>© {new Date().getFullYear()} DevRid</p>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;

