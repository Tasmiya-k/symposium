import React from "react";
import { Link } from "react-router-dom";
import { FileText, CalendarDays } from "lucide-react";
import ThemeCard from "../components/ThemeCard";
import HighlightsCard from "../components/HighlightsCard";
import highlightsData from "./highlightsData.json";
import Number from "../components/Number";
import Countdown from "../components/Countdown";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen bg-[url('/vesit_college.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 px-4 sm:px-6">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-red-500 pt-4">
            ISTE Approved
          </h2>

          {/* Event Title */}
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-3xl">
            <img
              src="/Title_sympo_.webp"
              alt="ISTE Symposium 2025 - Technology Advancements for Sustainability"
              className="w-full mx-auto"
            />
          </div>

          {/* Event Date */}
          <div className="w-full max-w-lg sm:max-w-xl md:max-w-3xl">
            <img
              src="Date_.webp"
              alt="Event Date: [13 - 16 Feb 2025]"
              className="w-full mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* TAS Logo */}
          <div className="w-48 sm:w-64 md:w-72">
            <img src="tas.webp" alt="TAS - Technical Advancement Symposium" className="w-full mx-auto" loading="lazy" />
          </div>

          {/* Event Theme */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-red-500 pb-4">
            Technology Advancements for Sustainability
          </h1>
        </div>
      </section>

      {/* Call-to-Action Buttons */}
      <section className="col-span-full flex flex-col md:flex-row items-center justify-center mt-10 space-y-4 md:space-y-0 md:space-x-6">
        {/* Brochure */}
        <a
          href="https://drive.google.com/file/d/19BSzwb1h4BWkG0zM4DJW2A6nmeZWU607/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Symposium Brochure"
        >
          <button className="w-56 h-14 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white text-lg font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:cursor-pointer">
            <FileText size={20} />
            <span>View Brochure</span>
          </button>
        </a>

        {/* Schedule */}
        <a
          href="https://drive.google.com/file/d/1PS-V3sHjlwuRw7Cb6zEG4QVkq9EjnpyT/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View Symposium Schedule"
        >
          <button className="w-56 h-14 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white text-lg font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:cursor-pointer">
            <FileText size={20} />
            <span>View Schedule</span>
          </button>
        </a>

        {/* Events Page Link */}
        <Link to="/events" aria-label="Explore Symposium Events">
          <button className="w-56 h-14 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 text-white text-lg font-bold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg hover:cursor-pointer">
            <CalendarDays size={20} />
            <span>Explore Events</span>
          </button>
        </Link>
      </section>


      {/* Countdown Timer */}
      <section className="row-span-1 col-span-full mt-10 px-6">
        <Countdown />
      </section>

      {/* Themes Section */}
      <section className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-500">
          Symposium Themes
        </h2>
      </section>

      {/* Highlights Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 mx-10">
        {highlightsData.map((item) => (
          <HighlightsCard
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            buttonText={item.buttonText}
          />
        ))}
      </section>

      {/* Key Highlights Section */}
      <section className="text-center mt-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-red-500">
          Key Highlights
        </h2>
      </section>

      {/* Theme Cards */}
      <section className="mt-8 mx-10">
        <ThemeCard />
      </section>

      {/* Statistics Section */}
      <section className="flex flex-wrap justify-center gap-6 mx-6 px-4 mt-12">
        <Number />
      </section>
    </div>
  );
};

export default Home;
