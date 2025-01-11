import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Symposium</h3>
                        <p className="text-sm text-gray-400">
                            Annual Tech Festival of Vivekanand Education Society's Institute of Technology
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                Hashu Advani Memorial Complex, Collector's Colony, Chembur, Mumbai - 400074
                            </li>
                            <li className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                +91 22 6153 9400
                            </li>
                            <li className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                vesit@ves.ac.in
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <Facebook size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <Twitter size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <Instagram size={24} />
                            </a>
                            <a href="#" className="hover:text-blue-400 transition duration-300">
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
                    <p>&copy; {currentYear} Vivekanand Education Society's Institute of Technology. All rights reserved.</p>
                    <p className="mt-2">
                        <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
                        {' | '}
                        <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

