import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DoctorForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    specialization: '',
    experience: '',
    location: '',
    description: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    navigate('/Doctor');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Doctor Registration
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join our network of healthcare professionals. Complete your profile to start 
            connecting with patients and providing quality care.
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="name">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="email">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="specialization">
                  Specialization *
                </label>
                <select
                  name="specialization"
                  id="specialization"
                  required
                  value={formData.specialization}
                  onChange={handleChange}
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                >
                  <option value="">Select your specialization</option>
                  <option value="physician">Physician</option>
                  <option value="dermatologist">Dermatologist</option>
                  <option value="psychiatrist">Psychiatrist</option>
                  <option value="neurologist">Neurologist</option>
                  <option value="cardiologist">Cardiologist</option>
                  <option value="orthopedist">Orthopedist</option>
                  <option value="pediatrician">Pediatrician</option>
                  <option value="gynecologist">Gynecologist</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="experience">
                  Years of Experience *
                </label>
                <input
                  type="number"
                  name="experience"
                  id="experience"
                  required
                  min="0"
                  max="50"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Enter years of experience"
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="location">
                  Location *
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  required
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter your location"
                  className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="description">
                Professional Description
              </label>
              <textarea
                name="description"
                id="description"
                rows="4"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe your expertise, qualifications, and approach to patient care..."
                className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 resize-none"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button
                type="submit"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Register as Doctor
              </button>
              <button
                type="button"
                onClick={() => navigate('/Doctor')}
                className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Back to Doctors
              </button>
            </div>
          </form>
        </div>

        {/* Information Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Join Our Platform?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Connect with Patients</h4>
              <p className="text-gray-600 text-sm">Reach a wider patient base and grow your practice</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Easy Management</h4>
              <p className="text-gray-600 text-sm">Streamlined appointment booking and patient management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Flexible Schedule</h4>
              <p className="text-gray-600 text-sm">Set your own availability and work on your terms</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            ⚠️ Disclaimer: By registering, you agree to provide accurate information and maintain 
            professional standards. All registrations are subject to verification and approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
