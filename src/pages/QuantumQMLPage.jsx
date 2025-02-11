import { Calendar, Clock, MapPin, MicVocal, Target, Star } from "lucide-react";

const eventDetails = {
    title: "Quantum State Initiation for Quantum Machine Learning (QML) Algorithms using IBM Qiskit",
    description:
        "A pioneer at the intersection of quantum computing and blockchain technology, Mr. Rajesh Sahasrabuddhe brings advanced expertise in quantum state preparation and amplitude encoding. He specializes in developing decentralized applications (DApps) and NFT marketplaces. ",
    highlights: [
        "Introduction to quantum state preparation and amplitude encoding.",
        "Exploring real-world applications of quantum computing in blockchain.",
        "Hands-on activities using IBM Qiskit to understand quantum circuits and algorithms.",
        "Discussion on decentralized applications (DApps) and NFT marketplaces in the quantum era."
    ],
    date: "Thursday, 13th February 2025",
    time: "10:30 AM - 12:45 PM",
    venue: "VESIT - Auditorium and Labs",
    speaker: {
        name: "Rajesh Sahasrabuddhe",
        designation: "Principal Consultant, NFT Marketplace Rezoomex, Pune, Maharashtra",
    },
    image: "/events/13feb_quantun.webp",
};

const QuantumQMLPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            <h1 className="text-5xl font-bold text-red-600 mb-6">Quantum Computing & Machine Learning</h1>
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

export default QuantumQMLPage;
