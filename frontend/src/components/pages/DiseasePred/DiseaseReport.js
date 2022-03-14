import React from 'react';
import { useLocation } from 'react-router-dom';
import './css/w3.css';
import './css/index.css';
import './css/DiseaseReport.css';
export default function HeartDiseaseReport() {
    const {state} = useLocation();
    return (
    <React.Fragment>
        <div className="w3-container boxed">
        <br></br>
		<br></br>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <h3 className="heading w3-sans-serif ">RESULT</h3>
            <hr className="line-head" />   
            <div className="w3-container result-box col-10 col-md-5">
                <div className="w3-panel">
                    <h5 className="redres" id="resulttext">{state.prediction}</h5>
                </div> 
            </div>
            <h3 className="subhead">REPORT</h3>
            <hr className="line-head" />
            <div className="w3-container report-box col-12 col-md-8 col-lg-5">
                <hr className="line" />
                <div className="table-responsive">
                    <table className="table table-borderless report ">
                        <thead>
                            <tr>
                                <th scope="col" className="symptom" >TEST</th>
                                <th scope="col" className="your-value" >YOUR VALUE</th>
                                <th scope="col" className="normal-value" >NORMAL VALUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.objects.map((obj) => (
                                <tr>
                                    <th scope="row" className="symptom" >{obj.name}</th>
                                    <td className="your-value" >{obj.me}</td>
                                    <td className="normal-value" >{obj.normal}</td>
                                </tr>
                                )
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </React.Fragment>);
}