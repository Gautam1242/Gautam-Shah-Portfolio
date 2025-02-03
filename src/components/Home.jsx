import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="flex flex-col-reverse md:flex-row items-center justify-around px-6 py-20 bg-gray-100">
      {/* Left Side */}
      <div className="flex flex-col flex-1 items-center md:items-start text-center md:text-left">
        <motion.p
          className="text-4xl md:text-5xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Name is <span className="text-blue-500">Gautam Shah</span>
        </motion.p>
        <motion.p
          className="text-2xl md:text-3xl text-gray-600 mt-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Full Stack Developer
        </motion.p>

        {/* Download Resume Button */}
        <motion.a
          href="/Gautam_Shah_Resume.pdf" // Replace with your actual resume file
          download="GautamShah_Resume.pdf"
          className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Download Resume
        </motion.a>
      </div>

      {/* Right Side (Image) */}
      <motion.img
        src="https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg"
        alt="Developer"
        className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Home;
