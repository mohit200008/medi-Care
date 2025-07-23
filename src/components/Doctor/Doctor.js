import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Link } from "react-router-dom";
import axios from 'axios';
import DoctorForm from './DoctorForm';

const Doctor = () => {
  const map = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [showDoctorForm, setShowDoctorForm] = useState(false);

  useEffect(() => {
    if (map.current) return;
    showVenues();
  });

  const showVenues = async () => {
    try {
      const endPoint = "https://api.foursquare.com/v2/venues/explore?";
      const parameters = {
        client_id: "PMHC2WA1VCBHVYOPPSJ0QSBYTLRF4PNJ04OWVWV0PZJ0QFIR",
        client_secret: "CULSZZ44YAEBOWBFGPB4BF5ISRXXSNYR0EE3JV3CNE2ZWHV0",
        query: "doctor",
        near: "Delhi",
        v: "20182507"
      };
      const response = await axios.get(endPoint + new URLSearchParams(parameters));
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvYmhpdDEwMDU4IiwiYSI6ImNrd3d5OWJ1cjA4ZW4yb2xhaGlhMHkwMWMifQ.zohlgS2FCbHsUPsspScPCw';
      map.current = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/light-v10',
        center: [77.2100, 28.5672],
        zoom: 11
      });
      response.data.response.groups[0].items.forEach(myVenue => {
        const el = document.createElement('div');
        el.className = 'w-4 h-4 bg-red-500 rounded-full border-2 border-white';
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            `<span>${myVenue.venue.name}</span>`
          );
        new mapboxgl.Marker(el)
          .setLngLat([myVenue.venue.location.lng, myVenue.venue.location.lat])
          .setPopup(popup)
          .addTo(map.current);
      });
    } catch (error) {
      console.error('Error loading map data:', error);
    }
  };

  const doctors = [
    {
      id: 1,
      name: "Dr. Kiran Dev",
      specialty: "Physician",
      image: require('../../assets/doctor/lady doctor.jpg'),
      rating: 4.0,
      reviews: 123,
      experience: "4 Years",
      description: "Experienced physician specializing in general medicine and preventive care."
    },
    {
      id: 2,
      name: "Dr. Rahul Kumar",
      specialty: "Dermatologist",
      image: require('../../assets/doctor/doctor2.jpg'),
      rating: 4.2,
      reviews: 101,
      experience: "10 Years",
      description: "Board-certified dermatologist with expertise in skin conditions and treatments."
    },
    {
      id: 3,
      name: "Dr. Emily Sharma",
      specialty: "Psychiatrist",
      image: require('../../assets/doctor/lady doctor3.jpg'),
      rating: 4.1,
      reviews: 56,
      experience: "12 Years",
      description: "Specialized in mental health and neurological disorders."
    }
  ];

  const specialties = [
    { value: 'all', label: 'All Specialties' },
    { value: 'physician', label: 'Physician' },
    { value: 'dermatologist', label: 'Dermatologist' },
    { value: 'psychiatrist', label: 'Psychiatrist' },
    { value: 'neurologist', label: 'Neurologist' }
  ];

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || 
                            doctor.specialty.toLowerCase().includes(selectedSpecialty);
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            Find Your Doctor
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with experienced healthcare professionals. Book appointments, read reviews, 
            and find the right specialist for your health needs.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative">
              <input 
                type="search" 
                placeholder="Search for doctors..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Specialty Filter */}
            <select 
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {specialties.map(specialty => (
                <option key={specialty.value} value={specialty.value}>
                  {specialty.label}
                </option>
              ))}
            </select>

            {/* Quick Stats */}
            <div className="bg-blue-50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-blue-600">{filteredDoctors.length}</div>
              <div className="text-sm text-gray-600">Doctors Available</div>
            </div>
          </div>
        </div>

        {/* Add Doctor Button Section */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowDoctorForm(true)}
            className="inline-flex items-center px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Doctor
          </button>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
              {/* Doctor Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className={`w-4 h-4 ${i < Math.floor(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white text-sm font-medium">{doctor.rating}</span>
                  </div>
                </div>
              </div>
              
              {/* Doctor Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {doctor.name}
                </h2>
                <p className="text-blue-600 font-semibold mb-3">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">{doctor.description}</p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-xl font-bold text-gray-800">{doctor.rating}</div>
                    <div className="text-xs text-gray-600">Rating</div>
                  </div>
                  <div className="border-l border-r border-gray-200">
                    <div className="text-xl font-bold text-gray-800">{doctor.reviews}</div>
                    <div className="text-xs text-gray-600">Reviews</div>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gray-800">{doctor.experience}</div>
                    <div className="text-xs text-gray-600">Experience</div>
                  </div>
                </div>

                {/* Action Button */}
                <Link 
                  to="/Details" 
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  Book Appointment
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Find Doctors Near You</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <div id="map" className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Doctor Form Modal - Conditionally Rendered */}
      {showDoctorForm && (
        <DoctorForm onClose={() => setShowDoctorForm(false)} />
      )}
    </div>
  );
};

export default Doctor;
