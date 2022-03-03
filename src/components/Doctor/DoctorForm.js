import React, { useState } from 'react';
import './DoctorForm.css';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';
import "../Button_Animation.css"

export default function DoctorForm() {

    const [formCheck, setformCheck] = useState(false);
    const docBtnClick = () => {
        setformCheck(!formCheck);
    }
    const [specilization, setSpecilization] = React.useState('');

    const handelSpecilization = (event) => {
        setSpecilization(event.target.value);
    };
    return (
        <div className={`${formCheck?'':'blur'}`}>
            {
                formCheck ?
                    <button onClick={docBtnClick} className='addDocBtn'
                    
                    onMouseDown ={ e =>e.currentTarget.classList.add("btn-animation")}
                     onMouseUp ={ e=> e.currentTarget.classList.remove("btn-animation")}
                    
                    >Add Doctor</button>
                    :
                    <div className="doctorFormContainer">
                        <button onClick={docBtnClick} className='closeBtn'>X</button>
                        <div className='doctorForm'>
                            <h1>Add Docter</h1>
                            <form action="" className='fromElement'>
                                    <TextField
                                        label="Doctor's Name"
                                        type="text"
                                        variant="outlined"
                                        required
                                    />
                                    <TextField
                                        label="Doctor's Age"
                                        type="number"
                                        variant="outlined"
                                    />
                                    <InputLabel id="specialization">Area of specialization</InputLabel>
                                    <Select
                                        labelId="specialization"
                                        id="specilization"
                                        value={specilization}
                                        label="Specilization"
                                        onChange={handelSpecilization}
                                    >
                                        <MenuItem value={'Dermatologist'}>Dermatologist</MenuItem>
                                        <MenuItem value={'Psychiatrist'}>Psychiatrist</MenuItem>
                                        <MenuItem value={'Neurologist'}>Neurologist</MenuItem>
                                        <MenuItem value={'Physician'}>Physician</MenuItem>
                                    </Select>
                                    <TextField
                                        label="Year OF Experience"
                                        type="number"
                                        variant="outlined"
                                    />
                                    <TextField
                                        label="Doctors's Review"
                                        type="text"
                                        variant="outlined"
                                        multiline
                                        required
                                    />
                                    <TextField
                                        label="Phone number"
                                        type="number"
                                        variant="outlined"
                                        required
                                    />
                                    <TextField
                                        label=" Address of the doctor"
                                        type="text"
                                        variant="outlined"
                                        multiline
                                    />
                                    <Button 
                                    
                                    
                                    onMouseDown ={ e =>e.currentTarget.classList.add("btn-animation")}
                                    onMouseUp ={ e=> e.currentTarget.classList.remove("btn-animation")}
                                    
                                    >Submit</Button>
                            </form>
                        </div>
                    </div>
            }
                
        </div>
    )
}
