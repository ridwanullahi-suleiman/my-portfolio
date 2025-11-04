import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, title: "Home", href: "#home" },
    { id: 2, title: "Services", href: "#service" },
    { id: 3, title: "Projects", href: "#project" },
    { id: 4, title: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleMenuClick = () => {
    // Close menu when a link is clicked
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-fit z-50">
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
            className="fixed top-0 left-0 h-full w-64 p-6 flex flex-col justify-between z-[998] bg-[#111]/80 backdrop-blur-md text-white shadow-2xl"
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
                    onClick={handleMenuClick} // Close menu on click
                    className="block text-lg font-semibold text-gray-300 hover:text-blue-500 transition"
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
