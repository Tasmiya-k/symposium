import React from "react";
import ThemeCard from "../components/ThemeCard";
import HighlightsCard from "../components/HighlightsCard";
import highlightsData from "./highlightsData.json";
import Number from "../components/Number";
import Countdown from "../components/Countdown";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-[url('/vesit_college.png')] bg-cover bg-center">
        {/* Overlay for opacity */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 sm:px-10 py-12 space-y-6">
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-red-500">
            ISTE Approved
          </h3>

          {/* Title Image */}
          <div className="w-4/5 sm:w-3/4 md:w-2/3 max-w-2xl">
            <img
              src="/Title_sympo_.png"
              alt="Header"
              className="w-full mx-auto"
            />
          </div>

          {/* Date Image */}
          <div className="w-4/5 sm:w-3/4 md:w-2/3 max-w-2xl">
            <img
              src="Date_.png"
              alt="Date"
              className="w-full mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* TAS Logo */}
          <div className="w-32 sm:w-48 md:w-56">
            <img src="tas.png" alt="TAS Logo" className="w-full mx-auto" />
          </div>

          {/* Theme Title */}
          <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-red-500">
            Technology Advancements for Sustainability
          </h3>
        </div>
      </div>

      <div className="row-span-1 col-span-full flex items-center justify-center mt-10">
        <a href="/events">
          <button className="px-10 py-3 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white text-lg font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
            View Schedule
          </button>
        </a>
      </div>

      {/* Countdown Section */}
      <div className="row-span-1 col-span-full mt-10 px-6">
        <Countdown />
      </div>

      {/* Themes Section */}
      <div className="text-center mt-16 px-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-red-500">
          THEMES
        </h3>
      </div>

      {/* Highlights Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-10">
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
      <div className="text-center mt-16 px-4">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-red-500">
          KEY HIGHLIGHTS
        </h3>
      </div>

      {/* Theme Cards */}
      <div className="mt-8 mx-10">
        <ThemeCard />
      </div>

      {/* Number Section */}
      <div className="flex flex-wrap justify-center gap-6 mx-6 px-4 mb-12 mt-12">
        <Number />
      </div>
    </div>
  );
};

export default Home;
