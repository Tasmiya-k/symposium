import React from "react";
import eventsData from "./events.json";

const Events = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6 py-10">
                {/* Page Header */}
                <h1 className="text-4xl font-extrabold text-center mb-10 text-teal-400">
                    Upcoming Events
                </h1>

                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {eventsData.events.map((event, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-6"
                        >
                            {/* Event Title */}
                            <h2 className="text-2xl font-bold text-teal-300 mb-4">
                                {event.title}
                            </h2>
                            {/* Event Description */}
                            <p className="text-gray-300 text-sm mb-6">
                                {event.description}
                            </p>
                            {/* Event Details */}
                            <div className="text-sm space-y-2">
                                <p>
                                    <span className="font-semibold text-teal-400">Date: </span>
                                    {event.date}
                                </p>
                                <p>
                                    <span className="font-semibold text-teal-400">Time: </span>
                                    {event.time}
                                </p>
                                <p>
                                    <span className="font-semibold text-teal-400">Location: </span>
                                    {event.location}
                                </p>
                                <p>
                                    <span className="font-semibold text-teal-400">Category: </span>
                                    {event.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Events;
