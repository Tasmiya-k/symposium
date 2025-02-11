import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Committee", to: "/committee" },
    { name: "Events", to: "/events" },
    { name: "Contact", to: "/contact" },
  ]

  return (
    <header className="bg-white text-red-600 border-b border-red-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="relative flex items-center justify-center pr-2">
          {/* Border around the logo */}
          <div className="border-2 border-[#f60404] py-2 px-4 rounded-md relative">
            {/* Square Logo */}
            <img
              src="/headerlogo.webp"
              alt="Symposium Logo - Technology Advancements for Sustainability"
              title="Symposium 2025 - Advancing Technology for Sustainability"
              className="h-14 w-[400px] object-contain"
              loading="lazy"
            />

          </div>
          {/* Legend-like text */}
          <div className="absolute -bottom-3 bg-white px-4 text-md font-bold">Symposium</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="relative group text-red-600 text-md font-semibold hover:text-red-800 transition duration-300"
              aria-label={`Navigate to ${item.name}`}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <a
            href="https://forms.gle/Y7xUCvRZq18c3B5D9"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-md font-semibold transition duration-300"
            aria-label="Register for Symposium"
          >
            Register Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-red-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-red-200">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="block text-red-600 text-lg font-medium hover:text-red-800 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://forms.gle/Y7xUCvRZq18c3B5D9"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-md font-semibold transition duration-300 text-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Register for Symposium"
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;