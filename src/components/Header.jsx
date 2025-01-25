import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Committee', href: '/committee' },
        { name: 'Events', href: '/events' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <header className="bg-white text-red-600 border-b border-red-200">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="relative flex items-center justify-center pr-2">
                    {/* Border around the logo */}
                    <div className="border-2 border-[#f60404] py-2 px-4 rounded-md relative">
                        {/* Square Logo */}
                        <img
                            src="/headerlogo.png"
                            alt="Symposium Logo"
                            className="h-14 w-[400px] object-contain"
                        />
                    </div>
                    {/* Legend-like text */}
                    <div className="absolute -bottom-3 bg-white px-4 text-md font-bold">
                        Symposium
                    </div>
                </div>

                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="relative group text-red-600 text-md font-semibold hover:text-red-800 transition duration-300"
                        >
                            {item.name}
                            {/* Animated Underline */}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a
                        href="https://forms.gle/Y7xUCvRZq18c3B5D9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-md font-semibold transition duration-300"
                    >
                        Registration
                    </a>
                </nav>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-red-600 focus:outline-none"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden">
                    <nav className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="relative group block text-red-600 text-lg hover:text-red-800 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                                {/* Animated Underline */}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="https://forms.gle/Y7xUCvRZq18c3B5D9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-md font-semibold transition duration-300 text-center"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Registration
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
