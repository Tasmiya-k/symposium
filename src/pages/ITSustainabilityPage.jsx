import { Calendar, Clock, MapPin, MicVocal, Target } from "lucide-react";

const eventDetails = {
    title: "IT Sustainability Trends and Solutions",
    description:
        "ISTE Approved Symposium on Technology Advancements for Sustainability (TAS’25) featuring a keynote address on IT Sustainability Trends and Solutions.",
    highlights: [
        "Exploring IT sustainability and its impact on business and the environment.",
        "Discussion on modern IT transformation strategies.",
        "Insights from an industry leader in enterprise architecture and sustainability.",
    ],
    date: "13th February 2025, Thursday",
    time: "9:30 AM - 10:00 AM",
    venue: "Auditorium, VESIT",
    speaker: {
        name: "Mrs. Lekha Menon",
        designation: "IT Sustainability Lead, Tata Consultancy Services",
    },
    image: "/events/13feb_Keynote.jpg",
    patrons: [
        "Shri. B. L. Boolani, Managing Trustee, VESIT",
        "Dr. (Mrs.) J. M. Nair, Principal, VESIT",
        "Dr. (Mrs.) M. Vijayalakshmi, Vice Principal, VESIT",
    ],
    organizingCommittee: [
        "Dr. (Mrs.) Gresha Bhatia (Convener, TAS'25, Dy. HOD, CMPN)",
        "Dr. (Mrs.) Sharmila Sengupta (Secretary, TAS'25, Associate Professor, CMPN)",
        "Dr. (Mrs.) Saylee Gharge (Treasurer, TAS'25, Associate Professor, EXTC)",
    ],
};

const ITSustainabilityPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            {/* Page Title */}
            <h1 className="text-5xl font-bold text-red-600 mb-6">TAS'25 Keynote</h1>

            {/* Event Card */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-xl overflow-hidden border-2 border-[#f60404]">
                {/* Image Section */}
                <div className="w-full md:w-1/2 p-4">
                    <img
                        src={eventDetails.image || "/placeholder.svg"}
                        alt={eventDetails.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Info Section */}
                <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-red-600 mb-2">{eventDetails.title}</h2>
                    <p className="text-md text-gray-700 mb-2">{eventDetails.description}</p>

                    {/* Highlights */}
                    <ul className="list-none pl-2 text-gray-700 mb-4">
                        {eventDetails.highlights.map((highlight, index) => (
                            <li key={index} className="text-md flex items-center mb-2">
                                <Target className="w-5 h-5 mr-2 text-red-600" />
                                {highlight}
                            </li>
                        ))}
                    </ul>

                    {/* Date & Time */}
                    <p className="text-md text-gray-700 flex items-center">
                        <Calendar className="w-5 h-5 mr-2 text-red-600" />
                        <span className="font-semibold">{eventDetails.date}</span>
                    </p>
                    <p className="text-md text-gray-700 flex items-center mt-2">
                        <Clock className="w-5 h-5 mr-2 text-red-600" />
                        <span className="font-semibold">{eventDetails.time}</span>
                    </p>

                    {/* Venue */}
                    <p className="text-md text-gray-700 flex items-center mt-2">
                        <MapPin className="w-5 h-5 mr-2 text-red-600" />
                        <span className="font-semibold">{eventDetails.venue}</span>
                    </p>

                    {/* Speaker */}
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

export default ITSustainabilityPage;
