import React,{useState} from "react";
import './static/main.css';
import { useHistory } from "react-router-dom";
import kidney from './static/kidney.jpg';
import '../../../styles/w3.css';

export default function KidneyDiseaseForm(props) {
	const history = useHistory();
    const [bp,setBp] = useState(0);
    const [sg,setSg] = useState(0);
    const [al,setAl] = useState(0);
    const [su,setSu] = useState(0);
    const [rbc,setRbc] = useState(0);
    const [pc,setPc] = useState(0);
    const [pcc,setPcc] = useState(0);

    const handleBp = e =>{setBp(e.target.value);};
    const handleSg = e =>{setSg(e.target.value);};
    const handleAl = e =>{setAl(e.target.value);};
    const handleSu = e =>{setSu(e.target.value);};
    const handleRbc = e =>{setRbc(e.target.value);};
    const handlePc = e =>{setPc(e.target.value);};
    const handlePcc = e =>{setPcc(e.target.value);};
    const requestOptions = {
        method : "POST",
        headers : { "Authorization" : "authtoken",
                    "Content-Type" : "application/json" },
        body : JSON.stringify([bp,sg,al,su,rbc,pc,pcc]),
    };
    const handlePredict = () =>{
        fetch('https://medi-care-backend.herokuapp.com/kidney-pred/',requestOptions)
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
		fetch('https://medi-care-backend.herokuapp.com/map-report/',requestOptions)
			.then((response) => response.json())
			.then((data) => history.push('/report/'+'kidney',{state:data}));
	};
    return (
        <div className="contact1">
		<div className="container-contact1">
			<div className="contact1-pic js-tilt" data-tilt>
				<img src={kidney} alt="IMG" />
			</div>
			<form className="contact1-form">
				<span className="contact1-form-title">
					CHECK WETHER YOU HAVE ANY KIDENY PROBLEM OR NOT
				</span>
				<div className="wrap-input1">
					<input className="input1 form-control" type="number" name="bp" onChange={handleBp} required="required" placeholder="Blood Pressure" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1" >
					<input className="input1 form-control" type="number" name="sg" onChange={handleSg} required="required" placeholder="Specific Gravity" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1">
					<input className="input1 form-control" type="number" name="al" onChange={handleAl} required="required" placeholder="Albumin" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1"> 
					<input className="input1 form-control" type="number" name="su" onChange={handleSu} required="required" placeholder="Blood Sugar Level" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1">
					<input className="input1 form-control" type="number" name="rbc" onChange={handleRbc} required="required" placeholder="Red Blood Cells Count" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1">
					<input className="input1 form-control" type="number" name="pc" onChange={handlePc} required="required" placeholder="Pus Cell Count" />
					<span className="shadow-input1"></span>
				</div>
				<div className="wrap-input1">
					<input className="input1 form-control" type="number" name="pcc" onChange={handlePcc} required="required" placeholder="Pus Cell Clumps" />
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
KidneyDiseaseForm.defaultProps = {
	defaultval:['90/60mmHg - 120/80 mmHg','1.010 - 1.020',
        '3.4 - 5.4 g/dL','100 - 125 mg/dL','4.7 - 6.1 mcL',' up to 5 in males and may be up to 10 in females','0-5'],
	name:['Blood Pressure','Specific Gravity','Albumin',
        'Blood Sugar Level','Red Blood Cells Count',
        'Pus Cell Count','Pus Cell Clumps']
};