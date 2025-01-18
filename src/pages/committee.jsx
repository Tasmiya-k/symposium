// import  { useState } from "react";

// const committeeData = [
//     {
//         title: "Patrons",
//         members: [
//             { name: "Shri. B. L. Boolani", role: "Managing Trustee, VES", image: "/bl_boolani.jpg" },
//             { name: "Shri. Suresh Malkani", role: "President, VES", image: "/Suresh_Malkani.jpg" },
//             { name: "Shri. Rajesh Gehani", role: "Secretary, VES", image: "/Rajesh_Gehani.jpg" },
//             { name: "Shri. Prakash Lulla", role: "Treasurer, VES", image: "path/to/image4.jpg" },
//             { name: "Shri. Bharat Ajwani", role: "Member, VES", image: "path/to/image5.jpg" },
//             { name: "Shri. Vijay Talreja", role: "Member, VES", image: "path/to/image6.jpg" },
//             { name: "Shri. Deepak Nehlani", role: "Member, VES", image: "path/to/image7.jpg" },
//         ],
//     },
//     {
//         title: "Advisory Committee",
//         members: [
//             { name: "Dr. Prasad Ramanathan", role: "Sr. Director, Capgemini", image: "path/to/image8.jpg" },
//             { name: "Shri. Pankaj Doke", role: "Senior Scientist, Tata Consultancy Services", image: "path/to/image9.jpg" },
//             { name: "Mrs. Asha Ahuja", role: "Head of Digital Engineering, Cognizant", image: "path/to/image10.jpg" },
//             { name: "Shri. Amit Rambhia", role: "MD, Panache Digilife Ltd.", image: "path/to/image11.jpg" },
//             { name: "Dr. Archana Sharma", role: "Distinguished Scientist, BARC", image: "path/to/image12.jpg" },
//             { name: "Dr. Anita Kanwar", role: "Principal, VES College of Arts, Science & Commerce", image: "path/to/image13.jpg" },
//             { name: "Shri. Devesh Rajadhyaksha", role: "Founder & CEO, CereLabs Pvt Ltd.", image: "path/to/image14.jpg" },
//             { name: "Dr. Prasad Ramanathan", role: "Sr. Advisor, Capgemini, Mumbai", image: "path/to/image15.jpg" },
//             { name: "Shri. Ajit Ambekar", role: "Software Engineer III, JP Morgan Chase", image: "path/to/image16.jpg" },
//             { name: "Dr. Amar Banerjee", role: "Ex-Senior Scientist, BARC", image: "path/to/image17.jpg" },
//             { name: "Shri. Suhas Bhide", role: "Director, Emerson Automation Solutions", image: "path/to/image18.jpg" },
//             { name: "Dr. Sanjay Thakur", role: "Head, R & D, Suyog Telematics Ltd", image: "path/to/image19.jpg" },
//             { name: "Shri. Milap Shah", role: "Co-founder, Print Stop & Hokey Pokey", image: "path/to/image20.jpg" },
//         ],
//     },
//     {
//         title: "Chairperson",
//         members: [
//             { name: "Dr.(Mrs.) J.M.Nair", role: "Principal, VESIT", image: "path/to/image21.jpg" },
//         ],
//     },
//     {
//         title: "Co-Chairperson",
//         members: [
//             { name: "Dr.(Mrs.) M.VijayLakshmi", role: "Vice-Principal, VESIT", image: "path/to/image22.jpg" },
//         ],
//     },
//     {
//         title: "Steering Committee",
//         members: [
//             { name: "Dr. Gresha Bhatia", role: "Convener, Dy. HOD, Computer Engineering", image: "path/to/image23.jpg" },
//             { name: "Dr. Sharmila Sengupta", role: "Secretary, Associate Professor, Computer Engineering", image: "path/to/image24.jpg" },
//             { name: "Dr. Saylee Gharge", role: "Treasurer, Associate Professor, Electronics & Telecommunication", image: "path/to/image25.jpg" },
//         ],
//     },
//     {
//         title: "Executive Committee",
//         members: [
//             { name: "Dr. Nupur Giri", role: "HOD, Computer Engineering", image: "path/to/image26.jpg" },
//             { name: "Dr. Kavita Tewari", role: "HOD, Electronics & Computer Science", image: "path/to/image27.jpg" },
//             { name: "Dr. C. D. Rawat", role: "HOD, Electronics & Telecommunication", image: "path/to/image28.jpg" },
//             { name: "Dr. Shalu Chopra", role: "HOD, Information Technology", image: "path/to/image29.jpg" },
//             { name: "Dr. Sangeetha Prasanna Ram", role: "HOD, Automation & Robotics", image: "path/to/image30.jpg" },
//             { name: "Dr. ShivKumar Goel", role: "HOD, Master of Computer Applications", image: "path/to/image31.jpg" },
//             { name: "Mr. Vivek Umrikar", role: "HOD, Humanities & Applied Sciences", image: "path/to/image32.jpg" },
//         ],
//     },
//     {
//         title: "Event Sponsors",
//         members: [
//             { name: "Dr. Nupur Giri", role: "HOD, Computer Engineering", image: "path/to/image26.jpg" },
//             { name: "Dr. Kavita Tewari", role: "HOD, Electronics & Computer Science", image: "path/to/image27.jpg" },
//             { name: "Dr. C. D. Rawat", role: "HOD, Electronics & Telecommunication", image: "path/to/image28.jpg" },
//             { name: "Dr. Shalu Chopra", role: "HOD, Information Technology", image: "path/to/image29.jpg" },
           
//         ],
//     },
// ];

// const Committee = () => {
//     const [selectedTeam, setSelectedTeam] = useState(committeeData[0].title);

//     return (
//         <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
//             <div className="container mx-auto px-6 py-10">
//                 <h1 className="text-4xl font-extrabold text-center mb-10 text-teal-400">Committee Members</h1>

//                 {/* Tabs for Teams */}
//                 <div className="flex justify-center mb-6">
//                     {committeeData.map((section) => (
//                         <button
//                             key={section.title}
//                             className={`px-4 py-2 mx-2 rounded-lg font-semibold ${
//                                 selectedTeam === section.title
//                                     ? "bg-teal-500 text-white"
//                                     : "bg-gray-700 text-gray-300 hover:bg-gray-600"
//                             }`}
//                             onClick={() => setSelectedTeam(section.title)}
//                         >
//                             {section.title}
//                         </button>
//                     ))}
//                 </div>

//                 {/* Selected Team Members */}
//                 <div className="bg-gray-800 rounded-lg shadow-xl p-6">
//                     {committeeData
//                         .filter((section) => section.title === selectedTeam)
//                         .map((section) => (
//                             <div key={section.title}>
//                                 <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                                     {section.members.map((member, memberIndex) => (
//                                         <li
//                                             key={memberIndex}
//                                             className="flex flex-col items-center bg-gray-700 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//                                         >
//                                             <img
//                                                 src={member.image}
//                                                 alt={member.name}
//                                                 className="w-43 h-60 rounded-tl-lg rounded-br-lg mb-4 object-cover"
//                                             />
//                                             <h3 className="text-lg font-medium text-teal-200">{member.name}</h3>
//                                             <p className="text-sm text-gray-400">{member.role}</p>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Committee;

import { useState } from "react";
import './Committee.module.css'; // Correct path to the styles.css file
const committeeData = [
    {
        title: "Patrons",
        members: [
            { name: "Shri. B. L. Boolani", role: "Managing Trustee, VES", image: "/bl_boolani.png" },
            { name: "Shri. Suresh Malkani", role: "President, VES", image: "/malkani.png" },
            { name: "Shri. Rajesh Gehani", role: "Secretary, VES", image: "/gehani.png" },
            { name: "Shri. Prakash Lulla", role: "Treasurer, VES", image: "/lulla.png" },
            { name: "Shri. Bharat Ajwani", role: "Member, VES", image: "/ajwani.png" },
            { name: "Shri. Vijay Talreja", role: "Member, VES", image: "/talreja.png" },
            { name: "Shri. Deepak Nehlani", role: "Member, VES", image: "/nehani.png" },
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
            { name: "Dr. Anita Kanwar", role: "Principal, VES College of Arts, Science & Commerce", image: "/anita.png" },
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
            { name: "Dr.(Mrs.) J.M.Nair", role: "Principal, VESIT", image: "path/to/image21.jpg" },
        ],
    },
    {
        title: "Co-Chairperson",
        members: [
            { name: "Dr.(Mrs.) M.VijayLakshmi", role: "Vice-Principal, VESIT", image: "path/to/image22.jpg" },
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
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="container mx-auto px-6 py-10">
           

                <h1 className="text-4xl font-extrabold text-center mb-10 text-teal-400">Committee Members</h1>

                {/* Tabs for Teams */}
                <div className="flex flex-wrap justify-center mb-6 gap-2">
                    {committeeData.map((section) => (
                        <button
                            key={section.title}
                            className={`px-4 py-2 mx-2 rounded-lg font-semibold transition-transform duration-300 ${
                                selectedTeam === section.title
                                    ? "bg-teal-500 text-white scale-105"
                                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                            }`}
                            onClick={() => setSelectedTeam(section.title)}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>

                {/* Selected Team Members */}
                <div className="bg-gray-800 rounded-lg shadow-xl p-6">
                    {committeeData
                        .filter((section) => section.title === selectedTeam)
                        .map((section) => (
                            <div key={section.title}>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {section.members.map((member, index) => (
                                        <li
                                        key={index}
                                        className="flex flex-col items-center p-4 rounded-lg text-center shadow-lg transform transition duration-300 ease-in-out"
                                    >
<div
                                                className="neon-border p-4 rounded-lg w-full"
                                                style={{
                                                    border: "4px solid #14b8a6",
                                                    boxShadow: "0 0 5px #14b8a6",
                                                }}
                                            >
                                                <h2 className="text-xl font-bold">{member.name}</h2>
                                                <p className="text-sm text-gray-300">{member.role}</p>
                                            </div>                                        </li>
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
