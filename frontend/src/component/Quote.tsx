import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Quote = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center text-white px-4">
      {/* Quote Text */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center text-4xl md:text-5xl font-extrabold leading-snug drop-shadow-lg"
      >
        Every story matters. <br /> Share yours with the world.
      </motion.div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 font-light text-lg md:text-xl text-slate-100"
      >
        Developed for you by
      </motion.div>

      {/* Author */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8, type: "spring" }}
        className="mt-2 font-semibold text-2xl md:text-3xl tracking-wide"
      >
        Harsh Chauhan
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="mt-6 flex space-x-6"
      >
        <a
          href="https://www.linkedin.com/in/harsh-rajput-b04aa8269/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="https://github.com/harsh24062"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-colors duration-300"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://x.com/harsh021g"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          <FaTwitter size={28} />
        </a>
        <a
          href="https://leetcode.com/u/harsh24062001/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          <SiLeetcode size={28} />
        </a>
      </motion.div>
    </div>
  );
};

export default Quote;
