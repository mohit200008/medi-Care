import React from 'react';
import { Link } from 'react-router-dom';

const DisPredicCard = ({ img, title, subtitle, para, url }) => {
  const isExternalLink = url.startsWith('http');
  
  const handleClick = () => {
    if (isExternalLink) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-lg font-semibold mb-1">{subtitle}</h3>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
          {para}
        </p>
        
        {/* Action Button */}
        <div className="flex justify-between items-center">
          {isExternalLink ? (
            <button
              onClick={handleClick}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Visit External App
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          ) : (
            <Link
              to={url}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Start Prediction
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          )}
          
          {/* Status Indicator */}
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
            isExternalLink 
              ? 'bg-yellow-100 text-yellow-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {isExternalLink ? 'External' : 'Integrated'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisPredicCard;
