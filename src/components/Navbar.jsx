import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle smooth scroll to a section
  const scrollToSection = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-bold text-gray-800">MyPortfolio</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg font-medium">
          {['Home', 'About','Skills', 'Portfolio', 'Contact'].map((item) => (
            <li
              key={item}
              className="cursor-pointer transition-transform duration-300 hover:scale-110 hover:text-blue-500"
              onClick={() => scrollToSection(item.toLowerCase())} // Scroll to the section on click
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-4 transition-all duration-300 shadow-lg">
          {['Home', 'About','Skills', 'Portfolio', 'Contact'].map((item) => (
            <a
              key={item}
              className="py-2 text-lg font-medium text-gray-700 hover:text-blue-500 transition-transform hover:scale-105"
              onClick={() => {
                scrollToSection(item.toLowerCase());
                setMenuOpen(false); // Close mobile menu after selection
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
