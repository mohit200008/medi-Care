import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl">🏥</span>
                            <h3 className="text-2xl font-bold">MediCare</h3>
                        </div>
                        <p className="text-gray-300 text-base leading-relaxed">
                            Your trusted partner in healthcare. We provide AI-powered disease prediction, 
                            doctor consultations, and comprehensive health monitoring tools.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <div className="space-y-3">
                            <Link 
                                to="/" 
                                className="block text-gray-300 hover:text-white transition-colors duration-300 text-base py-2"
                            >
                                Home
                            </Link>
                            <Link 
                                to="/DiseaesPred" 
                                className="block text-gray-300 hover:text-white transition-colors duration-300 text-base py-2"
                            >
                                Disease Prediction
                            </Link>
                            <Link 
                                to="/Doctor" 
                                className="block text-gray-300 hover:text-white transition-colors duration-300 text-base py-2"
                            >
                                Find Doctors
                            </Link>
                            <Link 
                                to="/health" 
                                className="block text-gray-300 hover:text-white transition-colors duration-300 text-base py-2"
                            >
                                Health Tools
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">📧</span>
                                <span className="text-base">support@medicare.com</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">📞</span>
                                <span className="text-base">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <span className="text-lg">📍</span>
                                <span className="text-base">Healthcare Street, Medical City, MC 12345</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-700 mt-8 pt-8 text-center">
                    <p className="text-gray-400 text-base">
                        © 2024 MediCare. All rights reserved. | 
                        <Link to="/privacy" className="ml-2 text-gray-300 hover:text-white transition-colors duration-300">
                            Privacy Policy
                        </Link> | 
                        <Link to="/terms" className="ml-2 text-gray-300 hover:text-white transition-colors duration-300">
                            Terms of Service
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
