import  { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Committee', href: '/committee' },
        { name: 'Events', href: '/events' },
        { name: 'Registration', href: '/registration' },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <header className="bg-gray-900 text-white border-b border-gray-800">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center ">
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold">Symposium</div>
                </div>
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="hover:text-blue-400 transition duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-white focus:outline-none"
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
                                className="block hover:text-blue-400 transition duration-300"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;

