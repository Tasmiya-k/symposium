import React from "react";
import ThemeCard from "../components/ThemeCard";
import HighlightsCard from "../components/HighlightsCard";
import highlightsData from "./highlightsData.json";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white grid">
      <div className="row-span-1 col-span-full flex items-center justify-center  bg-customBg ">
        <img src="Title-2.png" className="w-1/2 h-auto " />
      </div>
      <div className="row-span-1 col-span-full flex items-center justify-center bg-customBg mb-3">
        {/* Center UFO Image */}
        <img
          src="/ufo-teal.jpg"
          alt="UFO Shine"
          className="w-1/2 h-auto rounded-lg  my-4 mb-0 mt-0"
        />
      </div>
      <div>
        <h3 className="text-4xl font-extrabold text-center text-teal-400 mb-2">
          THEMES
        </h3>
      </div>
      <div className="row-span-1 col-span-full flex flex-wrap justify-around items-center gap-1 mt-1 mx-3 mb-2">
        {highlightsData.map((item) => (
          <HighlightsCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            buttonText={item.buttonText}
          />
        ))}
      </div>

      {/* Theme Cards Row */}
      <div>
        <h3 className="text-4xl font-extrabold text-center text-teal-400 mb-2">
          KEY HIGHLIGHTS
        </h3>
      </div>

      <div className="row-span-1 col-span-full flex flex-wrap justify-around items-center gap-1 mt-1 mx-3 mb-2">
        {/* Render Theme Cards */}
        <ThemeCard />
      </div>
    </div>
  );
};

export default Home;
