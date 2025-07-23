import React from 'react';
import { Link } from 'react-router-dom';

const BodyCard = ({ heading, para, img, id, top }) => {
  return (
    <div className={`flex items-center justify-center min-h-screen py-12 px-4 ${top ? 'bg-gradient-to-br from-blue-50 to-indigo-100' : 'bg-gradient-to-br from-green-50 to-emerald-100'}`}>
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col lg:flex-row items-center gap-8 ${id % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <img
                src={img}
                alt={heading}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              {heading}
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
              {para}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/DiseaesPred"
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                to="/Doctor"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Find Doctors
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyCard;
