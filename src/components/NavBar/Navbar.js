import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ mode, toggleMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/DiseaesPred', label: 'Disease Prediction' },
    { path: '/Doctor', label: 'Find Doctors' },
    { path: '/health', label: 'Health Tools' },
  ];

  return (
    <nav className={`${mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg sticky top-0 z-50 transition-colors duration-300 w-full`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-3xl font-bold ${mode === 'dark' ? 'text-white hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'} transition-colors duration-300 flex items-center`}
            >
              <span className="mr-3 text-4xl">🏥</span>
              MediCare
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    isActive(item.path)
                      ? `${mode === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`
                      : `${mode === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={toggleMode}
                className={`p-3 rounded-lg transition-colors duration-300 text-xl ${
                  mode === 'dark' 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                }`}
                aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
              >
                {mode === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Dark/Light Mode Toggle for Mobile */}
            <button
              onClick={toggleMode}
              className={`p-3 rounded-lg transition-colors duration-300 text-xl ${
                mode === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              }`}
              aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
            >
              {mode === 'dark' ? '☀️' : '🌙'}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-lg transition-colors duration-300 text-xl ${
                mode === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
              } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500`}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300`}>
        <div className={`px-4 pt-2 pb-4 space-y-2 ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'} border-t ${mode === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-300 ${
                isActive(item.path)
                  ? `${mode === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-700'}`
                  : `${mode === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'}`
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
