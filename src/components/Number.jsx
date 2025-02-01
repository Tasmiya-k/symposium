import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Number = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);

  const [ref, inView] = useInView({
    threshold: 0.1, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      console.log(inView);
      // Simulate number animation
      const animateNumber = (setter, target, speed) => {
        let count = 0;
        const interval = setInterval(() => {
          count += Math.ceil(target / 100); // Increment value
          if (count >= target) {
            setter(target);
            clearInterval(interval);
          } else {
            setter(count);
          }
        }, speed); // Adjust speed
      };

      animateNumber(setNum1, 5, 400);
      animateNumber(setNum2, 12, 200);
      animateNumber(setNum3, 2000, 35);
    }
  }, [inView]); // Run animation only when inView.

  return (
    <div ref={ref} className="relative font-inter antialiased">
      <div className="flex flex-col justify-center items-center px-4 overflow-hidden">
        <div className="w-full max-w-5xl px-6 md:px-8 py-12">
          {/* Animated Number Counter */}
          <section className="grid gap-20 md:grid-cols-3 md:gap-16 justify-center items-center">
            {/* Block #1 */}
            <div className="container text-center">
              <h2>
                <div
                  className="flex justify-center text-red-600 text-5xl font-extrabold mb-2"
                  style={{ width: "6ch" }}
                >
                  {num1.toLocaleString()}+
                </div>
                <div className="font-semibold text-2xl bg-clip-text text-gray-800 ">
                  Themes
                </div>
              </h2>
            </div>

            {/* Block #2 */}
            <div className="container text-center">
              <h2>
                <div
                  className="flex justify-center text-red-600 text-5xl font-extrabold mb-2"
                  style={{ width: "6ch" }}
                >
                  {num2.toLocaleString()}+
                </div>
                <div className="font-semibold text-2xl bg-clip-text textgray-800">
                  Hours of Hacking
                </div>
              </h2>
            </div>

            {/* Block #3 */}
            <div className="container text-center">
              <h2>
                <div
                  className="flex justify-center text-red-600 text-5xl font-extrabold mb-2"
                  style={{ width: "6ch" }}
                >
                  {num3.toLocaleString()}+
                </div>
                <div className="font-semibold text-2xl bg-clip-text textgray-800">
                  Participants
                </div>
              </h2>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Number;
