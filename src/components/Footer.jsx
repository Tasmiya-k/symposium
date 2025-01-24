import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Twitter, href: "https://x.com/vesitedu?t=U2cLvfg26xZL8dA0vU8TdQ&s=09", label: "Twitter" },
        { icon: Facebook, href: "https://www.facebook.com/vesinstituteoftech?mibextid=ZbWKwL", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/vesitedu?igsh=MjFqYWd0ZzBzMTZh", label: "Instagram" },
        { icon: Youtube, href: "https://www.instagram.com/vesitedu?igsh=MjFqYWd0ZzBzMTZh", label: "Youtube" },
        { icon: Linkedin, href: "https://in.linkedin.com/school/vivekanand-education-societys-institute-of-technology-sindhi-society-chembur-mumbai-400-071/", label: "LinkedIn" },
    ];

    return (
        <footer className="bg-white text-black pt-16 pb-8 border-t border-red-500">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* College Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 bg-transparent">
                            {/* Logo */}
                            <img
                                src="./vesitlogo1.png"
                                alt="VESIT Logo"
                                className="h-20 object-contain"
                            />
                            {/* Name and Designation */}
                            <div>
                                <h3 className="text-lg font-semibold">
                                    Vivekanand Education Society's Institute of Technology
                                </h3>
                                <span className="text-sm text-red-500 block mt-1">
                                    Autonomous Institute
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700">
                            Vivekanand Education Society's Institute of Technology (VESIT) established in 1984, is one of the premier autonomous engineering colleges affiliated with the University of Mumbai.
                        </p>
                        <div className="space-x-4">
                            <a
                                href="/path-to-brochure.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md text-sm transition duration-300"
                            >
                                Symposium Brochure
                            </a>
                            <a
                                href="/path-to-schedule.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-md text-sm transition duration-300"
                            >
                                Symposium Schedule
                            </a>
                        </div>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    aria-label={link.label}
                                    className="hover:text-red-500 transition duration-300 transform hover:scale-110"
                                >
                                    <link.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-red-500">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-700">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0 text-red-500" />
                                <span>Hashu Advani Memorial Complex, Collector's Colony, Chembur, Mumbai - 400074</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="mr-2 text-red-500" />
                                <a href="tel:+912261539400" className="hover:text-red-500 transition duration-300">
                                    +91 22 6153 9400
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="mr-2 text-red-500" />
                                <a href="mailto:vesit@ves.ac.in" className="hover:text-red-500 transition duration-300">
                                    vesit@ves.ac.in
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Globe size={18} className="mr-2 text-red-500" />
                                <a
                                    href="https://vesit.ves.ac.in/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition duration-300"
                                >
                                    website
                                </a>
                            </li>
                        </ul>

                    </div>

                    {/* Google Map */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold text-red-500">Find Us</h3>
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
                                className="shadow-md bor"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 pt-4 border-t border-red-500 text-center text-sm text-gray-700">
                    <p>
                        &copy; {currentYear} Vivekanand Education Society's Institute of Technology. All rights reserved.
                    </p>
                    <div className="mt-2 space-x-4">
                        <a href="#" className="hover:text-red-500 transition duration-300">
                            Privacy Policy
                        </a>

                        <a href="#" className="hover:text-red-500 transition duration-300">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
