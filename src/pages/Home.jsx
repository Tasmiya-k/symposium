import React from "react";
import ThemeCard from "../components/ThemeCard";
import HighlightsCard from "../components/HighlightsCard";
import highlightsData from "./highlightsData.json";
import Number from "../components/Number";
import Countdown from "../components/Countdown";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white grid">
      
      {/* Header Image */}
      <div className="row-span-1 col-span-full flex items-center justify-center bg-customBg">
        <img 
          src="2.png" 
          alt="Header" 
          className="max-w-full h-auto sm:w-3/4 md:w-2/3 lg:w-1/2" 
        />
      </div>
      
      {/* UFO Image */}
      <div className="row-span-1 col-span-full flex items-center justify-center bg-customBg mb-8">
        <img
          src="/3.png"
          alt="UFO Shine"
          className="max-w-full h-auto sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg "
        />
      </div>
      
      {/* Countdown Section */}
      <div className="row-span-1 col-span-full mb-8">
        <Countdown />
      </div>
      
      {/* Themes Section */}
      <div>
        <h3 className="text-4xl font-extrabold text-center text-teal-400 mb-3 ">
          THEMES
        </h3>
      </div>
      
      {/* Highlights Cards */}
      <div className="row-span-1 col-span-full flex flex-wrap justify-around items-center gap-7 mx-8 mb-8">
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

      {/* Key Highlights Section */}
      <div>
        <h3 className="text-4xl font-extrabold text-center text-teal-400 mb-3">
          KEY HIGHLIGHTS
        </h3>
      </div>

      {/* Theme Cards */}
      <div className="row-span-1 col-span-full flex flex-wrap justify-around items-center gap-8 mx-8 mb-8">
        <ThemeCard />
      </div>
      
      {/* Number Section */}
      <div className="row-span-1 col-span-full flex flex-wrap justify-around items-center gap-1 mx-3 mb-8">
        <Number />
      </div>
    </div>
  );
};

export default Home;
