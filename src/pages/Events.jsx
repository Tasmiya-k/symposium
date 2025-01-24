import React from "react";
import eventsData from "./events.json";

const Events = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800">
            <div className="container mx-auto px-6 py-10">
                {/* Page Header */}
                <h1 className="text-4xl font-extrabold text-center mb-10 text-[#f60404]">
                    Key Events of Symposium
                </h1>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsData.events.map((event, index) => (
                        <div
                            key={index}
                            className="group relative bg-gray-100 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:rotate-2 hover:scale-105"
                        >
                            {/* Animated Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#f60404] via-[#ff7f7f] to-[#f60404] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>

                            {/* Event Content */}
                            <div className="relative z-10 p-6">
                                {/* Event Image */}
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-40 object-cover rounded-lg mb-4 bg-white"
                                />
                                {/* Event Title */}
                                <h2 className="text-2xl font-bold text-[#f60404] mb-4">
                                    {event.title}
                                </h2>
                                {/* Event Description */}
                                <p className="text-gray-600 text-sm mb-6">
                                    {event.description}
                                </p>
                                {/* Event Details */}
                                {/* <div className="text-sm space-y-2">
                                    <p>
                                        <span className="font-semibold text-[#f60404]">Date: </span>
                                        {event.date}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-[#f60404]">Time: </span>
                                        {event.time}
                                    </p>
                                    <p>
                                        <span className="font-semibold text-[#f60404]">Category: </span>
                                        {event.category}
                                    </p>
                                </div> */}
                            </div>

                            {/* Overlay for Cool Effects */}
                            <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
