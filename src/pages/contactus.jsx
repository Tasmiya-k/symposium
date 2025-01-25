import React from "react";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

const ContactUs = () => {
    const contacts = [
        {
            name: "Mrs. Kadambari Sharma",
            email: "kadambari.sharma@ves.ac.in",
            phone: "8976690084",
        },
        {
            name: "Mrs. Indira Bhattachriya",
            email: "indira.bhattachariya@ves.ac.in",
            phone: "9819129498",
        },
        {
            name: "Mrs. Dipti Karani",
            email: "dipti.karani@ves.ac.in",
            phone: "9022114731",
        },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-800">
            <div className="container mx-auto px-6 py-10">
                {/* Page Header */}
                <h1 className="text-3xl font-bold text-red-600 mb-10 text-center">
                    Contact Us
                </h1>

                {/* Contact Details Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Address Section */}
                    <div className="space-y-6 bg-gray-100 rounded-lg p-6 shadow-lg">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">
                            Our Address
                        </h2>
                        {/* Google Map */}
                        <div className="space-y-6">
                            <div className="relative h-60 rounded overflow-hidden">
                                <iframe
                                    title="VESIT Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4094415404234!2d72.8892177!3d19.045727499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society&#39;s%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1737008577029!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen={false}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="shadow-md"
                                ></iframe>
                            </div>
                        </div>
                        <div className="flex items-start space-x-3">
                            <MapPin className="text-red-500 flex-shrink-0" size={24} />
                            <p>
                                Hashu Advani Memorial Complex, Collector's Colony,
                                Chembur, Mumbai - 400074
                            </p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Phone className="text-red-500 flex-shrink-0" size={24} />
                            <a
                                href="tel:+912261539400"
                                className="hover:underline"
                            >
                                +91 22 6153 9400
                            </a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Mail className="text-red-500 flex-shrink-0" size={24} />
                            <a
                                href="mailto:vesit@ves.ac.in"
                                className="hover:underline"
                            >
                                vesit@ves.ac.in
                            </a>
                        </div>
                        <div className="flex items-start space-x-3">
                            <Globe className="text-red-500 flex-shrink-0" size={24} />
                            <a
                                href="https://vesit.ves.ac.in"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                https://vesit.ves.ac.in
                            </a>
                        </div>
                    </div>

                    {/* Contact People Section */}
                    <div className="space-y-6 bg-gray-100 rounded-lg p-6 shadow-lg">
                        <h2 className="text-2xl font-bold text-red-500 mb-4">
                            Contact Our Team
                        </h2>
                        <ul className="space-y-4">
                            {contacts.map((contact, index) => (
                                <li
                                    key={index}
                                    className="p-4 bg-white border border-gray-200 rounded-lg shadow-md"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {contact.name}
                                    </h3>
                                    <p className="text-gray-600">
                                        <Mail size={18} className="inline mr-2 text-red-500" />
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="hover:underline"
                                        >
                                            {contact.email}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">
                                        <Phone size={18} className="inline mr-2 text-red-500" />
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="hover:underline"
                                        >
                                            {contact.phone}
                                        </a>
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
