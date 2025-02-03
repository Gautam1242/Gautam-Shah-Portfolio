import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center px-6 py-16 gap-6 bg-gray-100"
    >
      {/* Right Side (Image) */}
      <motion.img
        src="https://t4.ftcdn.net/jpg/03/15/02/27/360_F_315022751_vg1XCkEIsspb0LIP8bCwUKVhINP69wOv.jpg"
        alt="About Me"
        className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
      {/* Left Side (Text) */}
      <motion.div
        className="flex flex-1 flex-col items-center md:items-start text-center md:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-xl text-gray-600 max-w-lg">
          Hi 👋 myself Gautam Shah a final year student pursuing my undergrad
          Bachelor Of Computer Applications (BCA) from VIPS-TC affiliated to
          GGSIPU (2022-2025) . <br /> • Dedicated web developer with a passion for
          learning and mastering new technologies.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
