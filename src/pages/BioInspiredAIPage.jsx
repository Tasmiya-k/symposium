import { Calendar, Clock, MapPin, MicVocal, Target } from "lucide-react";

const eventDetails = {
    title: "Bio Inspired Approaches for AI",
    description:
        "Dr. Sasikumar M., Executive Director at CDAC Mumbai, is an expert in AI, e-learning, NLP, accessibility, and resource scheduling. He has extensive experience in research project design, expert systems, and soft computing, with a strong background in postgraduate teaching and consultancy.",
    highlights: [
        "Exploring bio-inspired approaches in artificial intelligence.",
        "Understanding AI applications in e-learning, NLP, and accessibility.",
        "Discussion on expert systems, soft computing, and machine learning.",
        "Insights into large-scale AI-driven resource scheduling solutions."
    ],
    date: "Thursday, 14th February 2025",
    time: "1:30 PM - 3:30 PM",
    venue: "B42, VESIT",
    speaker: {
        name: "Dr. Sasikumar M.",
        designation: "Executive Director, CDAC, Mumbai",
    },
    image: "/events/14feb_sasikumar.webp",
};

const BioInspiredAIPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            <h1 className="text-5xl font-bold text-red-600 mb-6">Bio-Inspired AI & Its Applications</h1>
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

export default BioInspiredAIPage;
