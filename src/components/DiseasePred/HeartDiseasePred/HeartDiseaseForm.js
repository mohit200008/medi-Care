import React, { useState } from 'react';
import './static/main.css';
import './static/HeartDiseaseForm.css';
import { useNavigate } from 'react-router-dom';
import heart from './static/heart.jpg';
import '../../../styles/w3.css';

const HeartDiseaseForm = () => {
	const [formData, setFormData] = useState({
		age: '',
		sex: '',
		cp: '',
		trestbps: '',
		chol: '',
		fbs: '',
		restecg: '',
		thalach: '',
		exang: '',
		oldpeak: '',
		slope: '',
		ca: '',
		thal: '',
	});

	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here
		console.log(formData);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">
			<div className="max-w-4xl mx-auto">
				{/* Header Section */}
				<div className="text-center mb-12">
					<h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
						Heart Disease Prediction
					</h1>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Please provide your health information below. Our AI model will analyze your data 
						to assess your heart disease risk and provide personalized recommendations.
					</p>
				</div>

				{/* Form Container */}
				<div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
					<form onSubmit={handleSubmit} className="space-y-8">
						{/* Personal Information Section */}
						<div className="space-y-6">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
							
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="age">
										Age *
									</label>
									<input
										type="number"
										name="age"
										id="age"
										required
										min="1"
										max="120"
										value={formData.age}
										onChange={handleChange}
										placeholder="Enter your age"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="sex">
										Sex *
									</label>
									<select
										name="sex"
										id="sex"
										required
										value={formData.sex}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select your sex</option>
										<option value="1">Male</option>
										<option value="0">Female</option>
									</select>
								</div>
							</div>
						</div>

						{/* Medical Information Section */}
						<div className="space-y-6">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Medical Information</h2>
							
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="cp">
										Chest Pain Type *
									</label>
									<select
										name="cp"
										id="cp"
										required
										value={formData.cp}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select chest pain type</option>
										<option value="0">Typical angina</option>
										<option value="1">Atypical angina</option>
										<option value="2">Non-anginal pain</option>
										<option value="3">Asymptomatic</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="trestbps">
										Resting Blood Pressure (mm Hg) *
									</label>
									<input
										type="number"
										name="trestbps"
										id="trestbps"
										required
										min="90"
										max="200"
										value={formData.trestbps}
										onChange={handleChange}
										placeholder="e.g., 120"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="chol">
										Cholesterol (mg/dl) *
									</label>
									<input
										type="number"
										name="chol"
										id="chol"
										required
										min="100"
										max="600"
										value={formData.chol}
										onChange={handleChange}
										placeholder="e.g., 200"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="fbs">
										Fasting Blood Sugar &gt; 120 mg/dl *
									</label>
									<select
										name="fbs"
										id="fbs"
										required
										value={formData.fbs}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="1">Yes (&gt; 120 mg/dl)</option>
										<option value="0">No (≤ 120 mg/dl)</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="restecg">
										Resting ECG Results *
									</label>
									<select
										name="restecg"
										id="restecg"
										required
										value={formData.restecg}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select ECG result</option>
										<option value="0">Normal</option>
										<option value="1">ST-T wave abnormality</option>
										<option value="2">Left ventricular hypertrophy</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="thalach">
										Maximum Heart Rate Achieved *
									</label>
									<input
										type="number"
										name="thalach"
										id="thalach"
										required
										min="60"
										max="202"
										value={formData.thalach}
										onChange={handleChange}
										placeholder="e.g., 150"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="exang">
										Exercise Induced Angina *
									</label>
									<select
										name="exang"
										id="exang"
										required
										value={formData.exang}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="1">Yes</option>
										<option value="0">No</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="oldpeak">
										ST Depression Induced by Exercise *
									</label>
									<input
										type="number"
										name="oldpeak"
										id="oldpeak"
										required
										step="0.1"
										min="0"
										max="6.2"
										value={formData.oldpeak}
										onChange={handleChange}
										placeholder="e.g., 0.0"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="slope">
										Slope of Peak Exercise ST Segment *
									</label>
									<select
										name="slope"
										id="slope"
										required
										value={formData.slope}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select slope</option>
										<option value="0">Upsloping</option>
										<option value="1">Flat</option>
										<option value="2">Downsloping</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="ca">
										Number of Major Vessels Colored by Fluoroscopy *
									</label>
									<select
										name="ca"
										id="ca"
										required
										value={formData.ca}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select number</option>
										<option value="0">0</option>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="thal">
										Thalassemia *
									</label>
									<select
										name="thal"
										id="thal"
										required
										value={formData.thal}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select type</option>
										<option value="1">Normal</option>
										<option value="2">Fixed defect</option>
										<option value="3">Reversable defect</option>
									</select>
								</div>
							</div>
						</div>

						{/* Submit Button */}
						<div className="flex flex-col sm:flex-row gap-4 pt-8">
							<button
								type="submit"
								className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
							>
								Get Heart Disease Prediction
							</button>
							<button
								type="button"
								onClick={() => navigate('/DiseaesPred')}
								className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
							>
								Back to Disease Prediction
							</button>
						</div>
					</form>
				</div>

				{/* Disclaimer */}
				<div className="mt-8 text-center">
					<p className="text-sm text-gray-500 max-w-2xl mx-auto">
						⚠️ Disclaimer: This prediction is for informational purposes only and should not replace professional medical advice. 
						Always consult with a healthcare provider for proper diagnosis and treatment.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeartDiseaseForm;