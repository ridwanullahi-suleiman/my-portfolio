import { varients, randomNumberBetween, contactText1 } from "./data/constants";
import { FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { motion, stagger, useAnimate, animate } from "framer-motion";

const buttons = [
  { id: 1, icon: <FaGithub />, name: "Github", link: "https://github.com/yourusername" },
  { id: 2, icon: <FaFacebook />, name: "Facebook", link: "https://facebook.com/yourprofile" },
  { id: 3, icon: <FaInstagram />, name: "Instagram", link: "https://instagram.com/yourusername" },
  { id: 4, icon: <FaWhatsapp />, name: "Whatsapp", link: "https://wa.me/yourwhatsappnumber" },
];

const ContactSection = () => {
  const onHoverStart = () => {
    const sparklesReset = sparkles.map((_, index) => i);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.00001 }],
      ...sparklesFadeOut,
    ]);
  };

  return (
    <div
      id="contact"
      className="container max-w-screen-xl mx-auto px-4 xl:px-0 mt-40 items-start text-white relative z-10"
    >
      <motion.h1
        variants={varients}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl text-left"
      >
        Contact Me
      </motion.h1>

      {/* Grid for left text + right form */}
      <motion.div className="grid gap-10 grid-cols-1 md:grid-cols-2 mt-20 relative z-10">

        {/* LEFT SIDE */}
        <div>
          <div className="mb-[15px] opacity-[70%] uppercase tracking-widest font-light text-[14px] text-left">
            <h4 className="md:text-[18px] opacity-[75%] uppercase tracking-widest font-light text-[14px] text-left">
              Get In Touch
            </h4>

            <div className="md:text-[35px] text-[30px] font-bold break-words whitespace-normal text-blue-400 text-left">
              {contactText1.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: i / 10 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </div>

            <p className="text-[15px] opacity-[75%] font-light mt-3 text-left">
              I’m always open to new projects, collaborations, or just a friendly chat.
              Let’s build something amazing together.
            </p>

            <h4 className="text-[30px] font-semibold mt-[30px] underline text-left">
              +234 9156308048
            </h4>

            <div className="flex mt-[40px] mb-[30px] justify-start">
              <div className="flex items-center space-x-4">
                {buttons.map(({ id, icon, name, link }) => (
                  <a
                    key={id}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative rounded-full p-2 border-2 border-blue-400 text-2xl blue-400 transition-transform hover:scale-105 duration-100"
                    aria-label={name}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (FORM) */}
        <div
          className="p-8 rounded-2xl shadow-xl border border-blue-400/30 bg-blue-900/20 backdrop-blur-md
                     hover:bg-blue-900/25 transition-all duration-300 relative z-10"
        >
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-md bg-transparent border border-blue-400/40 hover:border-blue-400 focus:border-blue-500 outline-none text-white placeholder-gray-300 caret-blue-400 relative z-10"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-md bg-transparent border border-blue-400/40 hover:border-blue-400 focus:border-blue-500 outline-none text-white placeholder-gray-300 caret-blue-400 relative z-10"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 rounded-md bg-transparent border border-blue-400/40 hover:border-blue-400 focus:border-blue-500 outline-none text-white placeholder-gray-300 caret-blue-400 relative z-10"
            />
            <textarea
              placeholder="Your Message"
              rows="6"
              className="p-3 rounded-md bg-transparent border border-blue-400/40 hover:border-blue-400 focus:border-blue-500 outline-none text-white placeholder-gray-300 caret-blue-400 resize-none relative z-10"
              required
            ></textarea>
            <button
              type="submit"
              className="py-3 px-5 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-all duration-300 text-white relative z-10"
            >
              Send Message
            </button>
          </form>
        </div>

      </motion.div>
    </div>
  );
};

export default ContactSection;
