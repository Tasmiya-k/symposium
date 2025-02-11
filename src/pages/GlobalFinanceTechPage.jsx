import { Calendar, Clock, MapPin, MicVocal, Target } from "lucide-react";

const eventDetails = {
    title: "Global Financial and Technological Levers Driving Sustainability",
    description:
        "As a part of the ISTE-approved Symposium on Technology Advancements for Sustainability (VESIT-TAS), an expert session has been organized under the guidance of VESIT Internal Quality Assurance Cell (VESIT-IQAC) in association with VESIT Institution's Innovation Council (VESIT-IIC).",
    highlights: [
        "Insights on sustainability, decarbonization, and energy optimization.",
        "Strategic consulting and corporate executive experience in global sustainability projects.",
        "Expertise in ESG, mergers and acquisitions, and sustainability reporting."
    ],
    date: "13th February 2025, Thursday",
    time: "1:30 PM - 3:30 PM",
    venue: "Auditorium and B32, VESIT",
    speaker: {
        name: "Mr. Soumyadeep Baksi",
        designation: "Deputy General Manager (Subcontinent) - Sustainability- Decarbonisation & Energy, DP World"
    },
    image: "/events/13feb_soumyadeep.jpg"
};

const GlobalFinanceTechPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            {/* Page Title */}
            <h1 className="text-5xl font-bold text-red-600 mb-6 text-center">Global Finance & Tech</h1>

            {/* Event Card */}
            <div className="w-full max-w-5xl flex flex-col md:flex-row bg-gray-100 shadow-lg rounded-xl overflow-hidden border-2 border-red-600">
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

export default GlobalFinanceTechPage;
