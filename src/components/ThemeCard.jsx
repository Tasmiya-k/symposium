import React from "react";
import themeData from "../pages/themeData.json";

const ThemeCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {themeData.map((theme, index) => (
        <div
          key={index}
          className="group relative bg-gray-800 rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:rotate-2 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
          {/* Theme Image */}
          <div className="relative z-10 p-8">
            <img
              src={theme.image}
              alt={theme.title}
              className="w-full h-40 object-cover rounded-lg mb-3 bg-white"
            />

            {/* Theme Title */}
            <h2 className="text-2xl font-bold text-teal-300 mb-2">
              {theme.title}
            </h2>

            {/* Theme Description */}
            <p className="text-gray-300 text-md">{theme.description}</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  );
};

export default ThemeCard;
