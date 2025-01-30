
import { useState } from "react";
import './Committee.module.css'; // Correct path to the styles.css file
const committeeData = [
    {
        title: "Patrons",
        members: [
            { name: "Shri. B. L. Boolani", role: "Managing Trustee, VESIT" },
            { name: "Shri. Suresh Malkani", role: "President, VES" },
            { name: "Shri. Rajesh Gehani", role: "Secretary, VES" },
            { name: "Shri. Prakash Lulla", role: "Treasurer, VES" },
            { name: "Shri. Bharat Ajwani", role: "Member, VES" },
            { name: "Shri. Vijay Talreja", role: "Member, VES" },
            { name: "Shri. Deepak Nehlani", role: "Member, VES" },
        ],
    },
    {
        title: "Advisory Committee",
        members: [
            { name: "Dr. Prasad Ramanathan", role: "Sr. Director, Capgemini", image: "/prasad.png" },
            { name: "Shri. Pankaj Doke", role: "Senior Scientist, Tata Consultancy Services", image: "/pankaj.png" },
            { name: "Mrs. Asha Ahuja", role: "Head of Digital Engineering, Cognizant", image: "/asha.png" },
            { name: "Shri. Amit Rambhia", role: "MD, Panache Digilife Ltd.", image: "/amit.png" },
            { name: "Dr. Archana Sharma", role: "Distinguished Scientist, BARC", image: "/archana.png" },
            { name: "Shri. Devesh Rajadhyaksha", role: "Founder & CEO, CereLabs Pvt Ltd.", image: "path/to/image14.jpg" },
            { name: "Dr. Prasad Ramanathan", role: "Sr. Advisor, Capgemini, Mumbai", image: "path/to/image15.jpg" },
            { name: "Shri. Ajit Ambekar", role: "Software Engineer III, JP Morgan Chase", image: "path/to/image16.jpg" },
            { name: "Dr. Amar Banerjee", role: "Ex-Senior Scientist, BARC", image: "path/to/image17.jpg" },
            { name: "Shri. Suhas Bhide", role: "Director, Emerson Automation Solutions", image: "path/to/image18.jpg" },
            { name: "Dr. Sanjay Thakur", role: "Head, R & D, Suyog Telematics Ltd", image: "path/to/image19.jpg" },
            { name: "Shri. Milap Shah", role: "Co-founder, Print Stop & Hokey Pokey", image: "path/to/image20.jpg" },
        ],
    },
    {
        title: "Chairperson",
        members: [
            { name: "Dr.(Mrs.) J.M.Nair", role: "Principal, VESIT (Chairperson)", image: "path/to/image21.jpg" },
            { name: "Dr.(Mrs.) M.VijayLakshmi", role: "Vice-Principal, VESIT (Co-Chairperson)", image: "path/to/image22.jpg" },
        ],
    },
    {
        title: "Steering Committee",
        members: [
            { name: "Dr. Gresha Bhatia", role: "Convener, Dy. HOD, Computer Engineering", image: "/gresha.png" },
            { name: "Dr. Sharmila Sengupta", role: "Secretary, Associate Professor, Computer Engineering", image: "/sharmila.png" },
            { name: "Dr. Saylee Gharge", role: "Treasurer, Associate Professor, Electronics & Telecommunication", image: "/saylee.png" },
        ],
    },
    {
        title: "Executive Committee",
        members: [
            { name: "Dr. Nupur Giri", role: "HOD, Computer Engineering", image: "path/to/image26.jpg" },
            { name: "Dr. Kavita Tewari", role: "HOD, Electronics & Computer Science", image: "path/to/image27.jpg" },
            { name: "Dr. C. D. Rawat", role: "HOD, Electronics & Telecommunication", image: "path/to/image28.jpg" },
            { name: "Dr. Shalu Chopra", role: "HOD, Information Technology", image: "path/to/image29.jpg" },
            { name: "Dr. Sangeetha Prasanna Ram", role: "HOD, Automation & Robotics", image: "path/to/image30.jpg" },
            { name: "Dr. ShivKumar Goel", role: "HOD, Master of Computer Applications", image: "path/to/image31.jpg" },
            { name: "Mr. Vivek Umrikar", role: "HOD, Humanities & Applied Sciences", image: "path/to/image32.jpg" },
        ],
    },
    {
        title: "Event Sponsors",
        members: [
            { name: "Dr. Nupur Giri", role: "HOD, Computer Engineering", image: "path/to/image26.jpg" },
            { name: "Dr. Kavita Tewari", role: "HOD, Electronics & Computer Science", image: "path/to/image27.jpg" },
            { name: "Dr. C. D. Rawat", role: "HOD, Electronics & Telecommunication", image: "path/to/image28.jpg" },
            { name: "Dr. Shalu Chopra", role: "HOD, Information Technology", image: "path/to/image29.jpg" },

        ],
    },
];



const Committee = () => {
    const [selectedTeam, setSelectedTeam] = useState(committeeData[0].title);

    return (
        <div className="min-h-screen bg-white text-gray-900">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-3xl font-semibold text-center mb-8 text-red-600">
                    Committee Members
                </h1>

                {/* Tabs for Teams */}
                <div className="flex flex-wrap justify-center mb-8 gap-6">
                    {committeeData.map((section) => (
                        <button
                            key={section.title}
                            className={`px-5 py-3 rounded-lg text-sm font-medium transition-all duration-200 transform ${selectedTeam === section.title
                                ? "bg-red-600 text-white shadow-lg scale-105"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:shadow-md"
                                }`}
                            onClick={() => setSelectedTeam(section.title)}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>

                {/* Selected Team Members */}
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {committeeData
                        .filter((section) => section.title === selectedTeam)
                        .map((section) => (
                            <div key={section.title}>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {section.members.map((member, index) => (
                                        <li
                                            key={index}
                                            className="flex flex-col items-center p-6 rounded-lg text-center transform transition duration-300 ease-in-out hover:scale-105"
                                        >
                                            <div
                                                className="border border-red-600 p-4 rounded-lg w-full"
                                                style={{
                                                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                <h2 className="text-lg font-semibold text-red-600 mb-2">
                                                    {member.name}
                                                </h2>
                                                <p className="text-sm text-gray-600">{member.role}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Committee;