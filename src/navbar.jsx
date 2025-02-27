import { useState } from 'react';

const ExternalAuthNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#', current: true },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <div className="relative w-full top-6 z-50 ">
      <div className="flex justify-center px-4 pb-16 "> {/* Added padding-bottom */}
        {/* Navbar Container */}
        <nav className="w-full max-w-2xl rounded-2xl bg-white/95 backdrop-blur-md 
                      shadow-lg border border-gray-200 hover:shadow-xl transition-shadow
                      duration-300 relative top-0">
          <div className="flex items-center justify-between h-16 px-6">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">LabourPro</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm ${
                    link.current 
                      ? 'text-blue-600 font-medium' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="sm:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg 
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg 
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden pb-4`}>
            <div className="px-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 px-3 text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* External Auth Buttons */}
        <div className="absolute right-10 top-1/4 -translate-y-1/2 flex gap-3">
          <button className="px-5 py-2 rounded-full bg-white border border-gray-200 
                          shadow-sm hover:shadow-md text-gray-600 hover:text-gray-900 
                          transition-all text-sm font-medium">
            Login
          </button>
          <button className="px-5  rounded-full bg-blue-600 hover:bg-blue-700 
                          text-white shadow-sm hover:shadow-md transition-all text-sm 
                          font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExternalAuthNav;