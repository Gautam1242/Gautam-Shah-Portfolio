import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact"  className="py-16 px-6 bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Heading */}
      <motion.h1
        className="font-bold text-5xl text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Section */}
      <div className="py-16 px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Side (Contact Info) */}
        <motion.div
          className="flex flex-col gap-4 text-lg text-gray-700"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p>
            <span className="font-semibold">Email</span><br />gautamshah317@gmail.com
          </p>
          <p>
            <span className="font-semibold">Social Links</span>{" "}
            <br /><a href="https://www.linkedin.com/in/gautam-shah-qw12/" className="text-blue-700">
              LinkedIn
            </a>
          </p>
        </motion.div>

        {/* Right Side (Form) */}
        <motion.div
          className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
            <input
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              type="text"
              placeholder="Name"
              required
            />
            <input
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              type="email"
              placeholder="Email"
              required
            />
            <textarea
              className="border p-2 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Message"
              rows="4"
              required
            ></textarea>
            <button
              className="bg-blue-600 text-white py-2 rounded-lg hover:scale-105 transition-transform duration-300 hover:bg-blue-700"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
