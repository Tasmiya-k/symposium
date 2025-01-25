import React from "react";

const HighlightsCard = ({ title, description, image, buttonText }) => {
  return (
    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 mx-4">
      {/* Image Container */}
      <div className="h-[30rem] w-[20rem] sm:w-[22rem] md:w-[24rem] lg:w-[26rem]">
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110"
          src={image}
          alt={title}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex translate-y-[200px] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <h1 className="font-dmserif text-2xl font-bold text-white mb-4 leading-snug">
          {title}
        </h1>
        <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {description}
        </p>
        <button className="rounded-full bg-neutral-900 py-2 px-3.5 text-sm capitalize text-white shadow shadow-black/60">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default HighlightsCard;
