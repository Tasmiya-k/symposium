import React, { useState, useEffect } from "react";

const Countdown = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const destinationDate = new Date("Feb 13, 2025 10:00:00").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = destinationDate - now;

      if (difference <= 0) {
        clearInterval(timer); // Stop the timer if the countdown ends
        return;
      }

      const days = String(
        Math.floor(difference / (1000 * 60 * 60 * 24))
      ).padStart(2, "0");
      const hours = String(
        Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((difference % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTime({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex items-start justify-center w-full gap-4 count-down-main">
      <div className="timer w-16">
        <div className="bg-red-500 py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element days font-Cormorant font-bold text-2xl text-white text-center">
            {time.days}
          </h3>
        </div>
        <p className="text-lg font-Cormorant font-medium text-black mt-1 text-center w-full">
          days
        </p>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div className="timer w-16">
        <div className="bg-red-500 py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element hours font-Cormorant font-bold text-2xl text-white text-center">
            {time.hours}
          </h3>
        </div>
        <p className="text-lg font-Cormorant font-medium text-black mt-1 text-center w-full">
          hours
        </p>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div className="timer w-16">
        <div className="bg-red-500 py-4 px-2 rounded-lg overflow-hidden">
          <h3 className="countdown-element minutes font-Cormorant font-bold text-2xl text-white text-center">
            {time.minutes}
          </h3>
        </div>
        <p className="text-lg font-Cormorant font-medium text-black mt-1 text-center w-full">
          minutes
        </p>
      </div>
      <h3 className="font-manrope font-semibold text-2xl text-gray-900">:</h3>
      <div className="timer w-16">
        <div className="bg-red-500 py-4 px-2 rounded-lg overflow-hidden ">
          <h3 className="countdown-element seconds font-Cormorant font-bold text-2xl text-white text-center ">
            {time.seconds}
          </h3>
        </div>
        <p className="text-lg font-Cormorant font-medium  text-black mt-1 text-center w-full">
          seconds
        </p>
      </div>
    </div>
  );
};

export default Countdown;
