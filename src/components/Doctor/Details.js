import React, { useState } from "react";
import "../../styles/Details.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Details() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [desc, setDesc] = useState("");
  const [date,setDate]=useState("");

  const [formError, setFormError] = useState(false);
  const [nameerror, setnameError] = useState(false);
  const [ageerror, setageError] = useState(false);
  const [gendererror, setgenderError] = useState(false);
  const [descerror, setdescError] = useState(false);
  const [dateerror,setDateError]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError(false);

    if (name === "") {
      setnameError(true);
      setFormError(true);
      return;
    } else if (age === "") {
      setageError(true);
      setFormError(true);
      return;
    } else if (gender === "") {
      setgenderError(true);
      setFormError(true);
      return;
    } else if (desc === "") {
      setdescError(true);
      setFormError(true);
      return;
    }
    else if(date===""){
      setDateError(true);
      setFormError(true);
    }

    if(formError===false)
    {
      alert("Booking confirmed!!")
    }
  };
  return (
    <>
      {/* <Router>
  <Navbar/>
</Router> */}
      <form className="box" onSubmit={handleSubmit}>
        <h1>Enter your Details</h1>
        <div>
          <input
            type="text"
            name=""
            placeholder="Full Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setnameError(false);
              setFormError(false);
            }}
          />
          {nameerror && <span style={{ color: "red" }}>Enter name field</span>}
        </div>

        <div>
          <input
            type="text"
            name=""
            placeholder="Age"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setageError(false);
              setFormError(false);
            }}
          />
          {ageerror && <span style={{ color: "red" }}>Enter age field</span>}
        </div>

        <div>
          <input
            type="text"
            name=""
            placeholder="Gender"
            value={gender}
            onChange={(e) => {
              setGender(e.target.value);
              setgenderError(false);
              setFormError(false);
            }}
          />
          {gendererror && (
            <span style={{ color: "red" }}>Enter gender field</span>
          )}
        </div>

        <div>
          <input
            type="text"
            name=""
            placeholder="Disease Description"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
              setdescError(false);
              setFormError(false);
            }}
          />
          {descerror && (
            <span style={{ color: "red" }}>Enter description field</span>
          )}
        </div>
        <div>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {setSelectedDate(date);
               setDateError(false);
               setFormError(false);
              }}
            dateFormat="dd/MM/yyyy"
            minDate={new Date()}
            scrollableMonthYearDropdown
            placeholderText="Date of Appointment"
          />
          <br/>
          {dateerror && <span style={{ color: "red"}}>Select appointment date</span>}
        </div>

        <input type="submit" name="" value="Confirm Your Booking" />
      </form>
    </>
  );
}
export default Details;
