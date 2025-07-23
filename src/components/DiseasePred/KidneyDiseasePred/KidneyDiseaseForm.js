import React, { useState } from 'react';
import './static/main.css';
import { useNavigate } from 'react-router-dom';
import kidney from './static/kidney.jpg';
import '../../../styles/w3.css';

const KidneyDiseaseForm = () => {
	const [formData, setFormData] = useState({
		age: '',
		bp: '',
		sg: '',
		al: '',
		su: '',
		rbc: '',
		pc: '',
		pcc: '',
		ba: '',
		bgr: '',
		bu: '',
		sc: '',
		sod: '',
		pot: '',
		hemo: '',
		pcv: '',
		wc: '',
		rc: '',
		htn: '',
		dm: '',
		cad: '',
		appet: '',
		pe: '',
		ane: '',
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
						Kidney Disease Prediction
					</h1>
					<p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Please provide your health information below. Our AI model will analyze your data 
						to assess your kidney disease risk and provide personalized recommendations.
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
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="bp">
										Blood Pressure (mm Hg) *
									</label>
									<input
										type="number"
										name="bp"
										id="bp"
										required
										min="50"
										max="200"
										value={formData.bp}
										onChange={handleChange}
										placeholder="e.g., 120"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>
							</div>
						</div>

						{/* Laboratory Tests Section */}
						<div className="space-y-6">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Laboratory Tests</h2>
							
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="sg">
										Specific Gravity *
									</label>
									<input
										type="number"
										name="sg"
										id="sg"
										required
										step="0.01"
										min="1.0"
										max="1.1"
										value={formData.sg}
										onChange={handleChange}
										placeholder="e.g., 1.02"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="al">
										Albumin (g/dl) *
									</label>
									<input
										type="number"
										name="al"
										id="al"
										required
										min="0"
										max="5"
										value={formData.al}
										onChange={handleChange}
										placeholder="e.g., 3.5"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="su">
										Sugar (mg/dl) *
									</label>
									<input
										type="number"
										name="su"
										id="su"
										required
										min="0"
										max="500"
										value={formData.su}
										onChange={handleChange}
										placeholder="e.g., 100"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="rbc">
										Red Blood Cells (millions/cmm) *
									</label>
									<input
										type="number"
										name="rbc"
										id="rbc"
										required
										step="0.1"
										min="2"
										max="8"
										value={formData.rbc}
										onChange={handleChange}
										placeholder="e.g., 4.5"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="pc">
										Pus Cells (cells/HPF) *
									</label>
									<select
										name="pc"
										id="pc"
										required
										value={formData.pc}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">Normal</option>
										<option value="1">Abnormal</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="pcc">
										Pus Cell Clumps *
									</label>
									<select
										name="pcc"
										id="pcc"
										required
										value={formData.pcc}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">Not Present</option>
										<option value="1">Present</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="ba">
										Bacteria *
									</label>
									<select
										name="ba"
										id="ba"
										required
										value={formData.ba}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">Not Present</option>
										<option value="1">Present</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="bgr">
										Blood Glucose Random (mg/dl) *
									</label>
									<input
										type="number"
										name="bgr"
										id="bgr"
										required
										min="50"
										max="500"
										value={formData.bgr}
										onChange={handleChange}
										placeholder="e.g., 120"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="bu">
										Blood Urea (mg/dl) *
									</label>
									<input
										type="number"
										name="bu"
										id="bu"
										required
										min="5"
										max="100"
										value={formData.bu}
										onChange={handleChange}
										placeholder="e.g., 15"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="sc">
										Serum Creatinine (mg/dl) *
									</label>
									<input
										type="number"
										name="sc"
										id="sc"
										required
										step="0.1"
										min="0.5"
										max="10"
										value={formData.sc}
										onChange={handleChange}
										placeholder="e.g., 1.0"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="sod">
										Sodium (mEq/L) *
									</label>
									<input
										type="number"
										name="sod"
										id="sod"
										required
										min="110"
										max="150"
										value={formData.sod}
										onChange={handleChange}
										placeholder="e.g., 140"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="pot">
										Potassium (mEq/L) *
									</label>
									<input
										type="number"
										name="pot"
										id="pot"
										required
										step="0.1"
										min="2"
										max="8"
										value={formData.pot}
										onChange={handleChange}
										placeholder="e.g., 4.0"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="hemo">
										Hemoglobin (g/dl) *
									</label>
									<input
										type="number"
										name="hemo"
										id="hemo"
										required
										step="0.1"
										min="5"
										max="20"
										value={formData.hemo}
										onChange={handleChange}
										placeholder="e.g., 14.0"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="pcv">
										Packed Cell Volume (%) *
									</label>
									<input
										type="number"
										name="pcv"
										id="pcv"
										required
										min="20"
										max="60"
										value={formData.pcv}
										onChange={handleChange}
										placeholder="e.g., 42"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="wc">
										White Blood Cells (cells/cmm) *
									</label>
									<input
										type="number"
										name="wc"
										id="wc"
										required
										min="2000"
										max="20000"
										value={formData.wc}
										onChange={handleChange}
										placeholder="e.g., 7000"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="rc">
										Red Blood Cells (millions/cmm) *
									</label>
									<input
										type="number"
										name="rc"
										id="rc"
										required
										step="0.1"
										min="2"
										max="8"
										value={formData.rc}
										onChange={handleChange}
										placeholder="e.g., 4.5"
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									/>
								</div>
							</div>
						</div>

						{/* Medical History Section */}
						<div className="space-y-6">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">Medical History</h2>
							
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="htn">
										Hypertension *
									</label>
									<select
										name="htn"
										id="htn"
										required
										value={formData.htn}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">No</option>
										<option value="1">Yes</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="dm">
										Diabetes Mellitus *
									</label>
									<select
										name="dm"
										id="dm"
										required
										value={formData.dm}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">No</option>
										<option value="1">Yes</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="cad">
										Coronary Artery Disease *
									</label>
									<select
										name="cad"
										id="cad"
										required
										value={formData.cad}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">No</option>
										<option value="1">Yes</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="appet">
										Appetite *
									</label>
									<select
										name="appet"
										id="appet"
										required
										value={formData.appet}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">Good</option>
										<option value="1">Poor</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="pe">
										Pedal Edema *
									</label>
									<select
										name="pe"
										id="pe"
										required
										value={formData.pe}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">No</option>
										<option value="1">Yes</option>
									</select>
								</div>

								<div>
									<label className="block text-gray-700 text-lg font-semibold mb-3" htmlFor="ane">
										Anemia *
									</label>
									<select
										name="ane"
										id="ane"
										required
										value={formData.ane}
										onChange={handleChange}
										className="w-full px-4 py-4 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300"
									>
										<option value="">Select option</option>
										<option value="0">No</option>
										<option value="1">Yes</option>
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
								Get Kidney Disease Prediction
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

export default KidneyDiseaseForm;