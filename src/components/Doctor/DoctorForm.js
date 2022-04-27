import React, { useState } from 'react';
import '../../styles/DoctorForm.css';
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { Select } from '@material-ui/core';
import "../../styles/Button_Animation.css"

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
                                        name="name"
                                    />
                                    <TextField
                                        label="Doctor's Age"
                                        type="number"
                                        variant="outlined"
                                        name="age"
                                    />
                                    <InputLabel id="specialization">Area of specialization</InputLabel>
                                    <Select
                                        labelId="specialization"
                                        id="specilization"
                                        value={specilization}
                                        label="Specilization"
                                        onChange={handelSpecilization}
                                        name="specialization"
                                    >
                                        <MenuItem value={'dermatologist'}>Dermatologist</MenuItem>
                                        <MenuItem value={'psychiatrist'}>Psychiatrist</MenuItem>
                                        <MenuItem value={'neurologist'}>Neurologist</MenuItem>
                                        <MenuItem value={'physician'}>Physician</MenuItem>
                                    </Select>
                                    <TextField
                                        label="Year OF Experience"
                                        type="number"
                                        variant="outlined"
                                        name="experience"
                                    />
                                    <TextField
                                        label="Doctors's Review"
                                        type="text"
                                        variant="outlined"
                                        multiline
                                        required
                                        name="review"
                                    />
                                    <TextField
                                        label="Phone number"
                                        type="number"
                                        variant="outlined"
                                        required
                                        name="phone"
                                    />
                                    <TextField
                                        label=" Address of the doctor"
                                        type="text"
                                        variant="outlined"
                                        multiline
                                        name="address"
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
