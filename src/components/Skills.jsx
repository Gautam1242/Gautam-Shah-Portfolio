import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section className="py-16 px-6 bg-gray-100" id="skills">
      <motion.h2
        className="text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Skill Cards */}
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-600">HTML</h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-600">CSS</h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-yellow-500">JavaScript</h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-blue-500">React</h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-green-500">Node.js</h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-green-700">MongoDB</h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-teal-400">Tailwind CSS</h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-black">Express.js</h3>
        </div>

        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-orange-500">Postman</h3>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-purple-500">Git</h3>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-violet-500">Github</h3>
        </div>
        <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-white shadow-lg hover:scale-105 transition-all duration-300">
          <h3 className="text-2xl font-semibold text-yellow-500">VS Code</h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
