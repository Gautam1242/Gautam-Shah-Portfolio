import React from "react";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Foodies",
      image: "https://c7.alamy.com/comp/PF3NWT/desktop-source-code-and-technology-background-developer-or-programer-with-coding-and-programming-wallpaper-by-computer-language-and-source-code-com-PF3NWT.jpg",
      description: "Foodies is a full stack project developed using MERN stack.Users can search food items , add to cart functionality, place order, make the payment and track the orders status.I have used React and Tailwind for the frontend and Node js and Express js for the backend and MongoDB Atlas for the data storage.",
      link: "https://foodcart-frontend.onrender.com/",
      github:"https://github.com/Gautam1242"
    },
    {
      id: 2,
      title: "Food Flow",
      image: "https://c7.alamy.com/comp/PF3NWT/desktop-source-code-and-technology-background-developer-or-programer-with-coding-and-programming-wallpaper-by-computer-language-and-source-code-com-PF3NWT.jpg",
      description: "Food Flow is a frontend project developed during my internship with my team of 4 members .It is based on the theme of one of the SDG's (ZERO HUNGER).I have used HTML , CSS and JavaScript in this project.",
      link: "https://gautam1242.github.io/FoodFlow/",
      github:"https://github.com/Gautam1242"
    },
    {
      id: 3,
      title: "Email Builder",
      image: "https://c7.alamy.com/comp/PF3NWT/desktop-source-code-and-technology-background-developer-or-programer-with-coding-and-programming-wallpaper-by-computer-language-and-source-code-com-PF3NWT.jpg",
      description: "Email Builder is used to create various kinds of emails instantly and I have also added the functionality of download the created emails in the HTML document format. I have used React , Tailwind , MongoDB , Node and Express.The data is coming from the backend.It is still in progress I want to add one feature so that you can send the mails directly from the app itself that you have created.",
      link: "https://email-builder-frontend-8po7.onrender.com/",
      github:"https://github.com/Gautam1242"
    },
  ];

  return (
    <section id="portfolio" className="py-16 px-6 bg-gray-100">
      <h1 className="text-5xl font-bold text-center mb-10">Portfolio</h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white p-5 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: project.id * 0.2 }}
          >
            <h2 className="text-xl font-bold mb-3">{project.title}</h2>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <p className="text-gray-600">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-600 font-bold mt-3 inline-block hover:underline hover:scale-105 duration-700"
            >
              View Project →
            </a>
            <br />
            <a
              href={project.github}
              className="text-blue-600 font-bold mt-3 inline-block hover:underline hover:scale-105 duration-700"
            >
              GitHub →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
