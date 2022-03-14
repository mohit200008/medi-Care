import React,{useState} from "react";
import './main.css';
import './HeartDiseaseForm.css';
import $ from 'jquery';
import './vendor/tilt/tilt.jquery.min.js';
import { useNavigate } from "react-router-dom";

export default function HeartDiseaseForm(props) {
    $('.js-tilt').tilt({
        scale: 1.1
    });
	const navigate = useNavigate();
    const [cp,setCp] = useState(0);
    const [trestbps,setTrestbps] = useState(0);
    const [chol,setChol] = useState(0);
    const [fbs,setFbs] = useState(0);
    const [restecg,setRestecg] = useState(0);
    const [thalach,setThalach] = useState(0);
    const [exang,setExang] = useState(0);

    const handleCp = e =>{setCp(e.target.value);};
    const handleTrestbps = e =>{setTrestbps(e.target.value);};
    const handleChol = e =>{setChol(e.target.value);};
    const handleFbs = e =>{setFbs(e.target.value);};
    const handleRestecg = e =>{setRestecg(e.target.value);};
    const handleThalach = e =>{setThalach(e.target.value);};
    const handleExang = e =>{setExang(e.target.value);};
    const requestOptions = {
        method : "POST",
        headers : { "Authorization" : "authtoken",
                    "Content-Type" : "application/json" },
        body : JSON.stringify([cp,trestbps,chol,fbs,restecg,thalach,exang]),
    };
    const handlePredict = () =>{
        fetch('/api/heart-pred/',requestOptions)
            .then((response) => response.json())
            .then((data) => createReport(data));
    };
	const createReport = (vals) =>{
		const requestOptions = {
			method : "POST",
			headers : { "Authorization" : "authtoken",
						"Content-Type" : "application/json" },
			body : JSON.stringify({
				pred:vals.prediction,
				vals:vals.report,
				defs:props.defaultval,
				names:props.name
			}),
		};
		fetch('/api/map-report/',requestOptions)
			.then((response) => response.json())
			.then((data) => navigate('/report/'+'heart',{state:data}));
	};
    return (
    <div className="contact1">
		<br></br>
		<br></br>
		<br></br>
		<br></br>
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src='../../../../static/images/heart.jpg' />
			</div>
			<form className="contact1-form">
				<span className="contact1-form-title">
					Take Heart Disease Test
				</span>
				<div className="wrap-input1">
					<select className="form-control select input1" id="cp" name="cp" required="required" onChange={handleCp} placeholder="Chest Pain Type">
						<option hidden>Chest Pain Type</option>
						<option value="1">Typical Angina</option>
						<option value="2">Atypical Angina</option>
						<option value="3">Non-Anginal Pain</option>
						<option value="4">Asymptomatic</option>
					</select>
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1" >
					<input className="form-control input1" type="number" name="trestbps" onChange={handleTrestbps} required="required" placeholder="Resting Blood Sugar" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1">
					<input className="form-control input1" type="number" name="chol" step="any" onChange={handleChol} required="required" placeholder="Serum Cholestrol in mg/dl" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1">
					<select className="form-control select input1" id="fbs" name="fbs" onChange={handleFbs} required="required" placeholder="Fasting Blood Sugar">
						<option hidden>Fasting Blood Sugar</option>
						<option value="0">Fasting Blood Sugar &lt; 120 mg/dl</option>
						<option value="1">Fasting Blood Sugar &gt; 120 mg/dl</option>
					</select>
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1">
					<select className="form-control select input1" id="restecg" name="restecg" onChange={handleRestecg} required="required" placeholder="Resting Electro-Cardiographic Result">
						<option hidden>Resting Electro-Cardiographic Result</option>
						<option value="0">Normal</option>
						<option value="1">Having ST-T Wave Abnormality</option>
						<option value="2">Showing probable or definite left Ventricular Hypertrophy</option>
					</select>
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1"> 
					<input className="form-control input1" type="number" name="thalach" onChange={handleThalach} required="required" placeholder="Maximum Heart Rate Achieved" />
					<span className="shadow-input1"></span>
				</div>
					<div className="wrap-input1">
						<select className="form-control select input1" id="exang" name="exang" onChange={handleExang} required="required" placeholder="Exercise Induced Angina">
							<option hidden>Exercise Induced Angina</option>
							<option value="1">Yes</option>
							<option value="0">No</option>
						</select>
						<span className="shadow-input1"></span>
					</div>
				<div className="container-contact1-form-btn">
					<button type="button" onClick={handlePredict} className="contact1-form-btn">
						<span>
							Predict
							<i className="fa fa-long-arrow-right" aria-hidden="true"></i>
						</span>
					</button>
				</div>
			</form>
		</div>
	</div>
    );
};
HeartDiseaseForm.defaultProps = {
	defaultval:['NA','100 - 125 mg/dL','125 - 200mg/dL','NA','NA','NA','NA'],
	name:['Chest Pain Type','Resting Blood Sugar','Serum Cholestrol',
		'Fasting Blood Sugar','Resting Electro-Cardiographic Result',
		'Maximum Heart Rate Achieved','Exercise Induced Angina']
};