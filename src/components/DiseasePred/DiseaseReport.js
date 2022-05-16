import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/w3.css';
import './DiseaseReport.css';
import './index.css';

export default function DiseaseReport() {
    const {state} = useLocation();
    const report = state;
    return (
    <React.Fragment>
        <div className="w3-container boxed">
        <br></br>
		<br></br>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <br></br>
            <br></br>
            <h3 className="heading w3-xxlarge w3-sans-serif ">RESULT</h3>
            <hr className="line-head" />   
            <div className="w3-container result-box col-10 col-md-5">
                <div className="w3-panel">
                    <h5 className="redres" id="resulttext">{report.state.prediction}</h5>
                </div> 
            </div>
            <h3 className="subhead">REPORT</h3>
            <hr className="line-head" />
            <div className="w3-container report-box col-12 col-md-8 col-lg-5">
                <hr className="line" />
                <div className="table-responsive">
                    <table className="table w3-large w3-light-grey table-borderless report ">
                        <thead>
                            <tr>
                                <th scope="col" className="symptom" >TEST</th>
                                <th scope="col" className="your-value" >YOUR VALUE</th>
                                <th scope="col" className="normal-value" >NORMAL VALUE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state?report.state.objects.map((obj) => (
                                <tr>
                                    <th scope="row" className="symptom" >{obj.name}</th>
                                    <td className="your-value" >{obj.me}</td>
                                    <td className="normal-value" >{obj.normal}</td>
                                </tr>
                                )
                            ):null}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </React.Fragment>);
}