import { Calendar, Clock, MapPin, MicVocal, Target, Star } from "lucide-react"

const eventDetails = {
    title: "Quantum Computing: Get Started",
    description:
        "We are happy to announce that, as a part of the ISTE-approved Symposium on Technology Advancements Sustainability (VESIT-TAS), an expert session under Tech-Ignite: Knowledge Series has been organized for faculties and students.",
    highlights: [
        "Industry expert discussing real-world applications of quantum computing.",
        "Research Opportunities in Quantum Computing.",
        "Hands-on activities to understand quantum circuits and algorithms.",
    ],
    date: "1st Feb 2025, Saturday",
    time: "2:00 PM - 4:00 PM",
    venue: "VESIT - Auditorium",
    speaker: {
        name: "Rajesh Sahasrabuddhe",
        designation: "Blockchain, Quantum Computing & Machine Learning Expert (IIT Delhi)",
    },
    registrationLink: "https://forms.gle/28wedr65eThpoNby6",
    image: "/events/tech_ignite_series.jpg",
    patrons: [
        "Shri. B. L. Boolani, Managing Trustee, VESIT",
        "Dr. Mrs. J. M. Nair, Principal, VESIT",
        "Dr. Mrs. M. Vijayalakshmi, Vice Principal, VESIT",
    ],
    executiveCommittee: ["Dr. Nupur Giri (HOD, Computer Engineering)"],
    organizingCommittee: [
        "Dr. (Mrs.) Gresha Bhatia (Convener, TAS'25)",
        "Dr. (Mrs.) Sharmila Sengupta (Secretary, TAS'25)",
        "Dr. (Mrs.) Saylee Gharge (Treasurer, TAS'25)",
    ],
    eventCoordinator: "Mr. Richard Joseph (Coordinator, Tech-Ignite, CMPN)",
}

const TechIgnitePage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center p-8">
            {/* Page Title */}
            <h1 className="text-5xl font-bold text-red-600 mb-6">TechIgnite Talks</h1>

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

                    {/* Registration Button */}
                    <a
                        href={eventDetails.registrationLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-6 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-700 transition text-center"
                    >
                        Register Here
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TechIgnitePage

