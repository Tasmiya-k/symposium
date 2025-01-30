import React, { useState } from "react"
import { ChevronDown, ChevronUp, Clock, MapPin, MicVocal, Calendar } from "lucide-react"

const eventsData = {
    "13th February 2025": [
        {
            session: "Session 1",
            events: [
                { time: "9:30 AM - 10:00 AM", topic: "Keynote Address", venue: "Auditorium" },
                {
                    time: "10:30 AM - 11:30 AM",
                    topic: "Quantum State Initiation for QML",
                    speaker: "Mr. Rajesh Shahastrabuddhe, Principal Consultant NFT Marketplace Rezoomex, Pune, Maharashtra",
                    venue: "Auditorium",
                },
                { time: "11:45 AM - 12:45 PM", topic: "Workshop on Quantum (QML)", venue: "B31, B32, B42" },
            ]
        },
        {
            session: "Session 2",
            tracks: [
                {
                    track: "Track 1",
                    time: "1:30 PM - 3:30 PM",
                    topic: "Medical Artificial Intelligence",
                    speaker: "Dr. Deepak Patkar, Director Medical Services, Nanavati Max Super Speciality Hospital, Mumbai",
                    venue: "Auditorium",
                },
                {
                    track: "Track 2",
                    time: "1:30 PM - 3:30 PM",
                    topic: "Global financial and technological levers driving Sustainability",
                    speaker: "Mr. Saumadeep Bakshi, Deputy General Manager (subcontinent) Sustainability- Decarbonisation & Energy, DP World",
                    venue: "B32",
                },
            ],
        },
    ],
    "14th February 2025": [
        {
            session: "Session 1",
            events: [
                {
                    time: "9:00 AM - 10:00 AM",
                    topic: "Sustainable Innovation: Integrating MATLAB and UAVs",
                    speaker: "Dr. Pranav Lad, Senior Engineer, Education Team, @ MathWorks (MATLAB and Simulink)",
                    venue: "Auditorium",
                },
                {
                    time: "10:30 AM - 12:30 PM",
                    topic: "MATLAB Workshop",
                    speaker: "Dr. Pranav Lad, Senior Engineer, Education Team, @ MathWorks (MATLAB and Simulink)",
                    venue: "B31, B32, B42"
                },
            ],
        },
        {
            session: "Session 2",
            tracks: [
                {
                    track: "Track 1",
                    topics: [
                        { time: "1:30 PM - 2:30 PM", topic: "Global Energy Scenario", speaker: "Dr. C V Prasad Rao, Energy and sustainability expert." },
                        { time: "2:30 PM - 3:30 PM", topic: "Telecom Tower Management", speaker: "Dr Sanjay Singh Thakur, Head R&D Suyog Telematics Mumbai." },
                    ],
                    venue: "B32",
                },
                {
                    track: "Track 2",
                    time: "1:30 PM - 3:30 PM",
                    topic: "Bio Inspired Approaches for AI",
                    speaker: "Dr. Sasikumar M, Executive Director, CDAC, Mumbai",
                    venue: "B42",
                },
            ],
        },
    ],
    "15th February 2025": [
        {
            session: "Ph.D. Colloquium",
            events: [
                { time: "9:00 AM - 5:00 PM", topic: "Inauguration, Meeting, Poster Presentations", venue: "Auditorium, 205, 206, 207, 208" },
            ],
            registration: { name: "Ph.D. Colloquium", link: "https://bit.ly/3BsKBnS" }
        },
        {
            session: "E-Summit ",
            events: [
                { time: "10:30 AM -4:00 PM", topic: "E-Summit 2025", venue: "Auditorium" },
            ],
        },
        {
            session: "Hackthon",
            events: [
                {
                    time: "8:00 AM(15th Feb) - 8.00 PM(16th Feb)", topic: "Software and Hardware Hackathon ", venue: "Library, B22, Lab 401, 410"
                },
            ],
            registration: { name: "Hackthon", link: "https://bit.ly/4gSdjhi" },
            brochure: { name: "Hackthon Brochure", link: "https://drive.google.com/file/d/1EIMcWpCGL18aD8DDRLQ5cwy-dUatD0NG/view?usp=sharing" }
        },
    ],
}

const registrationLinks = {
    symposium: "https://forms.gle/Y7xUCvRZq18c3B5D9",
    phd: "https://bit.ly/3BsKBnS",
    hackathon: "https://bit.ly/4gSdjhi",
}

const RegistrationButton = ({ link, text }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200"
    >
        {text}
    </a>
)

const Events = () => {
    const [expandedDay, setExpandedDay] = useState("13th February 2025")

    const toggleDay = (day) => {
        setExpandedDay(expandedDay === day ? null : day)
    }

    return (
        <div className="px-6 bg-gray-100 min-h-screen py-10">
            <h1 className="text-3xl font-bold text-red-600 mb-10 text-center">Event Schedule</h1>
            {Object.entries(eventsData).map(([day, sessions]) => (
                <div key={day} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden border-2 border-[#f60404]">
                    <button
                        onClick={() => toggleDay(day)}
                        className="w-full text-left py-4 px-6 flex justify-between items-center bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
                    >
                        <span className="text-xl font-semibold flex items-center">
                            <Calendar className="mr-2" size={24} />
                            {day}
                        </span>
                        {expandedDay === day ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                    </button>
                    {expandedDay === day && (
                        <div className="p-4">
                            {sessions.map((session, index) => (
                                <div key={index} className="mb-6 last:mb-0">
                                    <h3 className="text-lg font-bold text-red-700 mb-3">{session.session}</h3>
                                    {session.events &&
                                        session.events.map((event, i) => (
                                            <div key={i} className="mb-4 bg-gray-50 p-3 rounded-md shadow-md border-2">
                                                <p className="text-lg font-semibold text-gray-900 mb-1">{event.topic}</p>
                                                <p className="flex items-center text-gray-700 mb-1">
                                                    <Clock className="mr-2" size={18} />
                                                    <span className="font-medium">{event.time}</span>
                                                </p>
                                                {event.speaker && (
                                                    <p className="flex items-center text-gray-600 mb-1">
                                                        <MicVocal className="mr-2" size={18} />
                                                        {event.speaker}
                                                    </p>
                                                )}
                                                <p className="flex items-center text-gray-600">
                                                    <MapPin className="mr-2" size={18} />
                                                    {event.venue}
                                                </p>
                                            </div>
                                        ))}
                                    {session.registration && (
                                        <a href={session.registration.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 mr-4">
                                            <button className="px-6 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-700 transition">
                                                Register for {session.registration.name}
                                            </button>
                                        </a>
                                    )}
                                    {session.brochure && (
                                        <a href={session.brochure.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4">
                                            <button className="px-6 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-700 transition">
                                                {session.brochure.name}
                                            </button>
                                        </a>
                                    )}

                                    {session.tracks &&
                                        session.tracks.map((track, i) => (
                                            <div key={i} className="mb-4 bg-gray-50 p-3 rounded-md shadow-md border-2">
                                                <h4 className="font-semibold text-red-600 mb-2">{track.track}</h4>
                                                {track.topics ? (
                                                    track.topics.map((topic, j) => (
                                                        <div key={j} className="mb-3 last:mb-0 p-3 rounded-md shadow-md border-2">
                                                            <p className="text-lg font-semibold text-gray-900 mb-1">{topic.topic}</p>
                                                            <p className="flex items-center text-gray-700 mb-1">
                                                                <Clock className="mr-2" size={18} />
                                                                <span className="font-medium">{topic.time}</span>
                                                            </p>
                                                            <p className="flex items-center text-gray-600">
                                                                <MicVocal className="mr-2" size={18} />
                                                                {topic.speaker}
                                                            </p>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <>
                                                        <p className="text-lg font-semibold text-gray-900 mb-1">{track.topic}</p>
                                                        <p className="flex items-center text-gray-700 mb-1">
                                                            <Clock className="mr-2" size={18} />
                                                            <span className="font-medium">{track.time}</span>
                                                        </p>
                                                        <p className="flex items-center text-gray-600 mb-1">
                                                            <MicVocal className="mr-2" size={18} />
                                                            {track.speaker}
                                                        </p>
                                                        <p className="flex items-center text-gray-600">
                                                            <MapPin className="mr-2" size={18} />
                                                            {track.venue}
                                                        </p>
                                                    </>
                                                )}
                                            </div>
                                        ))}
                                </div>
                            ))}
                            {day === "13th February 2025" || day === "14th February 2025" ? (
                                <RegistrationButton link={registrationLinks.symposium} text="Register for Symposium" />
                            ) : null}
                        </div>
                    )}
                </div>
            ))}
            <div className="mt-8 bg-white rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Registration Information</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-lg font-semibold">Symposium (TAS'25) 2025</h3>
                        <p>Registration Fee: ₹100/day (13th-14th Feb 2025)</p>
                        <p>Registration Deadline: 31st January 2025</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Ph.D. Colloquium 2025</h3>
                        <p>Deadline for Participation: 25th January 2025</p>
                        <p>Notification to Shortlisted Candidates: 31st January 2025</p>
                        <p>Fee for Shortlisted Candidates: ₹200/-</p>
                        <p>Registration Deadline for Shortlisted Candidates: 3rd February 2025</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">VES-HACK-IT (Hackathon on Sustainability)</h3>
                        <p>Registration Timeline: 4th to 20th January 2025</p>
                        <p>Registration Fee:</p>
                        <ul className="list-disc list-inside">
                            <li>Software: Round 1: None. Final Round: ₹200/- per team (Offline Round)</li>
                            <li>Hardware: ₹400/- per team for the Workshop (Mandatory)</li>
                        </ul>
                        <p>
                            For more details visit{" "}
                            <a
                                href="https://veshackit.ves.ac.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                https://veshackit.ves.ac.in/
                            </a>
                        </p>
                        <p>
                            Brochure : {" "}
                            <a
                                href="https://drive.google.com/file/d/1EIMcWpCGL18aD8DDRLQ5cwy-dUatD0NG/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline"
                            >
                                View Brochure
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events

