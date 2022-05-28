import { Button, InputLabel, MenuItem, Select } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import '../../styles/Button_Animation.css';
import '../../styles/DoctorForm.css';

export default function DoctorForm() {
	const [formCheck, setformCheck] = useState(false);
	const docBtnClick = () => {
		setformCheck(!formCheck);
	};
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
	};
	return (
		<div className={`${formCheck ? '' : 'blur'}`}>
			{formCheck ? (
				<button
					onClick={docBtnClick}
					className='addDocBtn'
					onMouseDown={(e) =>
						e.currentTarget.classList.add('btn-animation')
					}
					onMouseUp={(e) =>
						e.currentTarget.classList.remove('btn-animation')
					}
				>
					ADD DOCTOR
				</button>
			) : (
				<div className='doctorFormContainer'>
					<button onClick={docBtnClick} className='closeBtn'>
						X
					</button>
					<div className='doctorForm'>
						<h1>Add Docter</h1>
						<form
							action=''
							className='fromElement'
							onSubmit={handleSubmit}
						>
							<TextField
								label="Doctor's Name"
								type='text'
								variant='outlined'
								name='name'
								required
								onChange={(e) => setName(e.target.value)}
							/>
							<TextField
								label="Doctor's Age"
								type='number'
								variant='outlined'
								name='age'
								required
								InputProps={{
									inputProps: { min: 25 },
								}}
								onChange={(e) => setAge(e.target.value)}
							/>
							<InputLabel id='specialization'>
								Area of specialization
							</InputLabel>
							<Select
								labelId='specialization'
								id='specilization'
								value={specilization}
								label='Specilization'
								onChange={handelSpecilization}
								name='specialization'
							>
								<MenuItem value={'dermatologist'}>
									Dermatologist
								</MenuItem>
								<MenuItem value={'psychiatrist'}>
									Psychiatrist
								</MenuItem>
								<MenuItem value={'neurologist'}>
									Neurologist
								</MenuItem>
								<MenuItem value={'physician'}>
									Physician
								</MenuItem>
							</Select>
							<TextField
								label='Year OF Experience'
								type='number'
								variant='outlined'
								name='experience'
								required
								InputProps={{
									inputProps: { min: 0 },
								}}
								onChange={(e) => setExperience(e.target.value)}
							/>
							<TextField
								label="Doctors's Review"
								type='text'
								variant='outlined'
								multiline
								required
								name='review'
								onChange={(e) => setReview(e.target.value)}
							/>
							<TextField
								label='Phone number'
								type='number'
								variant='outlined'
								required
								name='phone'
								onChange={(e) => setphonenumber(e.target.value)}
							/>
							<TextField
								label=' Address of the doctor'
								type='text'
								variant='outlined'
								multiline
								name='address'
								required
								onChange={(e) => setaddress(e.target.value)}
							/>
							<label
								for='myfile'
								className='verification'
								required
							>
								Verification proof of your degree :
							</label>
							<input
								type='file'
								id='myfile'
								name='myfile'
								onChange={(e) => setFile(e.target.files[0])}
								required
							></input>
							<Button
								onMouseDown={(e) =>
									e.currentTarget.classList.add(
										'btn-animation',
									)
								}
								onMouseUp={(e) =>
									e.currentTarget.classList.remove(
										'btn-animation',
									)
								}
								type='submit'
								variant='contained'
								className='submitBtn'
								onSubmit={handleSubmit}
							>
								Submit
							</Button>
						</form>
					</div>
				</div>
			)}
		</div>
	);
}
