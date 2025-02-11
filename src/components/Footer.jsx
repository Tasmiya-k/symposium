import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: Twitter, href: "https://x.com/vesitedu?t=U2cLvfg26xZL8dA0vU8TdQ&s=09", label: "Twitter" },
        { icon: Facebook, href: "https://www.facebook.com/vesinstituteoftech?mibextid=ZbWKwL", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/vesitedu?igsh=MjFqYWd0ZzBzMTZh", label: "Instagram" },
        { icon: Youtube, href: "https://www.youtube.com/@vesitube", label: "YouTube" },
        {
            icon: Linkedin,
            href: "https://in.linkedin.com/school/vivekanand-education-societys-institute-of-technology-sindhi-society-chembur-mumbai-400-071/",
            label: "LinkedIn",
        },
    ];

    return (
        <footer className="bg-white text-black pt-16 pb-4 border-t border-red-500">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* College Info */}
                    <section className="space-y-6" aria-labelledby="college-info">
                        <div className="flex items-center space-x-4 bg-transparent">
                            {/* Logo */}
                            <img
                                src="./vesitlogo1.webp"
                                alt="Vivekanand Education Society's Institute of Technology (VESIT) Logo"
                                className="h-20 object-contain"
                            />
                            {/* Name and Designation */}
                            <div>
                                <h3 id="college-info" className="text-lg font-semibold">
                                    Vivekanand Education Society's Institute of Technology
                                </h3>
                                <span className="text-sm text-red-500 block mt-1">Autonomous Institute</span>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700">
                            Vivekanand Education Society's Institute of Technology (VESIT), established in 1984, is one of the premier
                            autonomous engineering colleges affiliated with the University of Mumbai.
                        </p>

                        <nav aria-label="Social Media Links" className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    aria-label={link.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-red-500 transition duration-300 transform hover:scale-110"
                                >
                                    <link.icon size={24} />
                                </a>
                            ))}
                        </nav>
                    </section>

                    {/* Contact Details */}
                    <address className="space-y-6 not-italic">
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
                                    Official Website
                                </a>
                            </li>
                        </ul>
                    </address>

                    {/* Google Map */}
                    <section className="space-y-6" aria-labelledby="find-us">
                        <h3 id="find-us" className="text-xl font-semibold text-red-500">Find Us</h3>
                        <div className="relative h-60 rounded overflow-hidden">
                            <iframe
                                title="VESIT Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4094415404234!2d72.8892177!3d19.045727499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8add9569a29%3A0xb7ad04bf9a389df7!2sVivekanand%20Education%20Society's%20Institute%20Of%20Technology%20(VESIT)!5e0!3m2!1sen!2sin!4v1737008577029!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="shadow-md"
                            ></iframe>
                        </div>
                    </section>
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 pt-4 border-t border-red-500 text-center text-sm text-gray-700">
                    <p>&copy; {currentYear} Vivekanand Education Society's Institute of Technology. All rights reserved.</p>
                </div>
            </div>

            {/* Structured Data for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "EducationalOrganization",
                    "name": "Vivekanand Education Society's Institute of Technology",
                    "url": "https://vesit.ves.ac.in/",
                    "logo": "./vesitlogo1.webp",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "Hashu Advani Memorial Complex, Collector's Colony, Chembur",
                        "addressLocality": "Mumbai",
                        "postalCode": "400074",
                        "addressCountry": "IN"
                    },
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": "+91 22 6153 9400",
                        "contactType": "customer service"
                    }
                })
            }} />
        </footer>
    );
};

export default Footer;
