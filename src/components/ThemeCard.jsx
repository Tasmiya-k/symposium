import React from "react";
import themeData from "../pages/themeData.json";

const ThemeCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {themeData.map((theme, index) => (
        <div
          key={index}
          className="bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-4"
        >
          {/* Theme Image */}
          <div className="overflow-hidden rounded-lg mb-2">
            <img
              src={theme.image}
              alt={theme.title}
              className="w-full h-60 rounded-tl-lg rounded-br-lg mb-2 object-cover"
            />
          </div>

          {/* Theme Title */}
          <h2 className="text-2xl font-bold text-teal-300 mb-2">
            {theme.title}
          </h2>

          {/* Theme Description */}
          <p className="text-gray-300 text-sm mb-4">{theme.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ThemeCard;
