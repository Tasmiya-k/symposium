import React from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import themeData from "../pages/themeData.json";

const ThemeCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {themeData.map((theme, index) => {
        const isClickable = Boolean(theme.detailsPage); // Check if there is a details page

        return (
          <div
            key={index}
            className="group relative bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform duration-500 hover:rotate-2 hover:scale-105"
          >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#f60404] via-[#ffa1a1] to-[#f60404] opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

            {/* Theme Content */}
            <div className="relative z-10 p-8 flex flex-col h-full">
              {/* Theme Image */}
              <img
                src={theme.image}
                alt={theme.title}
                className="w-full h-40 object-cover rounded-lg mb-3 bg-[#f60404]"
              />

              {/* Theme Title */}
              <h2 className="text-2xl font-bold text-[#f60404] mb-2">
                {theme.title}
              </h2>

              {/* Theme Description */}
              <p className="text-gray-700 text-md flex-grow">
                {theme.description}
              </p>

              {/* Know More Button (Only if detailsPage exists) */}
              {isClickable && (
                <Link
                  to={theme.detailsPage}
                  className="mt-3 px-4 py-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white text-sm font-bold rounded-full flex items-center justify-center ml-auto transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
                >
                  Know More
                </Link>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ThemeCard;
