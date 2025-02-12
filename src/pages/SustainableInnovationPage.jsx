import { Calendar, Clock, MapPin, MicVocal, Target } from "lucide-react";

const eventDetails = {
    title: "Sustainable Innovation: Integrating MATLAB and UAVs for Real-World Impact",
    description:
        "Dr. Pranav Lad, Senior Engineer at MathWorks, specializes in dynamics, vibration analysis, machine learning, robotics, and parallel computing. With extensive research experience at IIT Bombay, he bridges the gap between technology and academia, enhancing scientific research and learning through MATLAB and Simulink.",
    highlights: [
        "Exploring sustainable innovation through MATLAB and UAV integration.",
        "Understanding applications of machine learning and robotics in engineering.",
        "Enhancing STEM research using MATLAB and Simulink.",
        "Bridging technology and academia to foster impactful research."
    ],
    date: "Thursday, 14th February 2025",
    time: "9:00 AM - 12:30 PM",
    venue: "Auditorium, VESIT",
    speaker: {
        name: "Dr. Pranav Lad",
        designation: "Senior Engineer, Education Team, MathWorks (MATLAB and Simulink)",
    },
    image: "/events/14feb_Pranav.webp",
};

const SustainableInnovationPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            <h1 className="text-5xl font-bold text-red-600 mb-6">Sustainable Innovation & MATLAB Applications</h1>
            <div className="w-full max-w-5xl flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-xl overflow-hidden border-2 border-[#f60404]">
                <div className="w-full md:w-1/2 p-4">
                    <img
                        src={eventDetails.image || "/placeholder.svg"}
                        alt={eventDetails.title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-red-600 mb-2">{eventDetails.title}</h2>
                    <p className="text-md text-gray-700 mb-2">{eventDetails.description}</p>
                    <ul className="list-none pl-2 text-gray-700 mb-4">
                        {eventDetails.highlights.map((highlight, index) => (
                            <li key={index} className="text-md flex items-center mb-2">
                                <Target className="w-5 h-5 mr-2 text-red-600" />
                                {highlight}
                            </li>
                        ))}
                    </ul>
                    <p className="text-md text-gray-700 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-red-600" />
                        <span className="font-semibold">{eventDetails.date}</span>
                    </p>
                    <p className="text-md text-gray-700 flex items-center mt-2">
                        <Clock className="w-5 h-5 mr-2 text-red-600" />
                        <span className="font-semibold">{eventDetails.time}</span>
                    </p>
                    <p className="text-md text-gray-700 flex items-center mt-2">
                        <MapPin className="w-5 h-5 mr-2 text-red-600" />
                        <span className="font-semibold">{eventDetails.venue}</span>
                    </p>
                    <p className="text-md text-gray-700 flex items-center mt-2">
                        <MicVocal className="w-5 h-5 mr-2 text-red-600" />
                        <span className="font-semibold">{eventDetails.speaker.name}</span>
                    </p>
                    <p className="text-sm text-gray-600 ml-7">{eventDetails.speaker.designation}</p>
                </div>
            </div>
        </div>
    );
};

export default SustainableInnovationPage;
