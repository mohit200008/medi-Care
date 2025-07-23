import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';

export default function DoctorForm({ onClose }) {
	const [formCheck, setformCheck] = useState(true);
	const [specilization, setSpecilization] = React.useState('');
	const [file, setFile] = useState([]);
	const [name, setName] = React.useState('');
	const [age, setAge] = React.useState('');
	const [experience, setExperience] = React.useState('');
	const [review, setReview] = React.useState('');
	const [phonenumber, setphonenumber] = React.useState('');
	const [address, setaddress] = React.useState('');

	const handelSpecilization = (event) => {
		setSpecilization(event.target.value);
	};

	const handleClose = () => {
		if (onClose) {
			onClose();
		} else {
			setformCheck(false);
		}
	};

	const data = {
		name: name,
		age: age,
		experience: experience,
		review: review,
		phonenumber: phonenumber,
		address: address,
		specilization: specilization,
		file: file,
	};

	const handleSubmit = () => {
		console.log(data);
		alert('Form submitted successfully');
		handleClose();
	};

	return (
		<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
			<div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative max-h-[90vh] overflow-y-auto">
				<button 
					onClick={handleClose} 
					className="absolute top-6 right-6 text-gray-500 hover:text-gray-700 text-2xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-300"
					aria-label="Close form"
				>
					×
				</button>
				<h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Add Doctor</h1>
				<form onSubmit={handleSubmit} className="space-y-6">
					<TextField
						label="Doctor's Name"
						type="text"
						variant="outlined"
						name="name"
						required
						fullWidth
						size="large"
						onChange={(e) => setName(e.target.value)}
						sx={{
							'& .MuiOutlinedInput-root': {
								fontSize: '1rem',
								padding: '12px 16px',
								minHeight: '56px'
							},
							'& .MuiInputLabel-root': {
								fontSize: '1rem'
							}
						}}
					/>
					<TextField
						label="Doctor's Age"
						type="number"
						variant="outlined"
						name="age"
						required
						fullWidth
						size="large"
						InputProps={{
							inputProps: { 
								min: 25,
								max: 80
							},
						}}
						onChange={(e) => setAge(e.target.value)}
						sx={{
							'& .MuiOutlinedInput-root': {
								fontSize: '1rem',
								padding: '12px 16px',
								minHeight: '56px'
							},
							'& .MuiInputLabel-root': {
								fontSize: '1rem'
							}
						}}
					/>
					<div className="w-full">
						<InputLabel id="specialization" className="mb-3 text-lg font-semibold">
							Area of Specialization *
						</InputLabel>
						<Select
							labelId="specialization"
							id="specilization"
							value={specilization}
							label="Specialization"
							onChange={handelSpecilization}
							name="specialization"
							fullWidth
							size="large"
							sx={{
								fontSize: '1rem',
								padding: '12px 16px',
								minHeight: '56px',
								'& .MuiSelect-select': {
									fontSize: '1rem'
								}
							}}
						>
							<MenuItem value="dermatologist" sx={{ fontSize: '1rem', padding: '12px 16px' }}>Dermatologist</MenuItem>
							<MenuItem value="psychiatrist" sx={{ fontSize: '1rem', padding: '12px 16px' }}>Psychiatrist</MenuItem>
							<MenuItem value="neurologist" sx={{ fontSize: '1rem', padding: '12px 16px' }}>Neurologist</MenuItem>
							<MenuItem value="physician" sx={{ fontSize: '1rem', padding: '12px 16px' }}>Physician</MenuItem>
							<MenuItem value="cardiologist" sx={{ fontSize: '1rem', padding: '12px 16px' }}>Cardiologist</MenuItem>
							<MenuItem value="orthopedist" sx={{ fontSize: '1rem', padding: '12px 16px' }}>Orthopedist</MenuItem>
						</Select>
					</div>
					<TextField
						label="Years of Experience"
						type="number"
						variant="outlined"
						name="experience"
						required
						fullWidth
						size="large"
						InputProps={{
							inputProps: { 
								min: 0,
								max: 50
							},
						}}
						onChange={(e) => setExperience(e.target.value)}
						sx={{
							'& .MuiOutlinedInput-root': {
								fontSize: '1rem',
								padding: '12px 16px',
								minHeight: '56px'
							},
							'& .MuiInputLabel-root': {
								fontSize: '1rem'
							}
						}}
					/>
					<TextField
						label="Rating (1-5)"
						type="number"
						variant="outlined"
						name="review"
						required
						fullWidth
						size="large"
						InputProps={{
							inputProps: { 
								min: 1,
								max: 5,
								step: 0.1
							},
						}}
						onChange={(e) => setReview(e.target.value)}
						sx={{
							'& .MuiOutlinedInput-root': {
								fontSize: '1rem',
								padding: '12px 16px',
								minHeight: '56px'
							},
							'& .MuiInputLabel-root': {
								fontSize: '1rem'
							}
						}}
					/>
					<TextField
						label="Phone Number"
						type="tel"
						variant="outlined"
						name="phonenumber"
						required
						fullWidth
						size="large"
						onChange={(e) => setphonenumber(e.target.value)}
						sx={{
							'& .MuiOutlinedInput-root': {
								fontSize: '1rem',
								padding: '12px 16px',
								minHeight: '56px'
							},
							'& .MuiInputLabel-root': {
								fontSize: '1rem'
							}
						}}
					/>
					<TextField
						label="Address"
						type="text"
						variant="outlined"
						name="address"
						required
						fullWidth
						size="large"
						multiline
						rows={3}
						onChange={(e) => setaddress(e.target.value)}
						sx={{
							'& .MuiOutlinedInput-root': {
								fontSize: '1rem',
								padding: '12px 16px',
								minHeight: '80px'
							},
							'& .MuiInputLabel-root': {
								fontSize: '1rem'
							}
						}}
					/>
					<div className="flex flex-col sm:flex-row gap-4 pt-6">
						<Button
							type="submit"
							variant="contained"
							fullWidth
							size="large"
							sx={{
								backgroundColor: '#3b82f6',
								fontSize: '1rem',
								padding: '12px 24px',
								minHeight: '56px',
								fontWeight: 600,
								'&:hover': {
									backgroundColor: '#2563eb',
									transform: 'translateY(-1px)',
									boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
								}
							}}
						>
							Submit Doctor Information
						</Button>
						<Button
							variant="outlined"
							onClick={handleClose}
							fullWidth
							size="large"
							sx={{
								borderColor: '#6b7280',
								color: '#6b7280',
								fontSize: '1rem',
								padding: '12px 24px',
								minHeight: '56px',
								fontWeight: 600,
								'&:hover': {
									borderColor: '#4b5563',
									backgroundColor: '#f9fafb',
									transform: 'translateY(-1px)'
								}
							}}
						>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
}
