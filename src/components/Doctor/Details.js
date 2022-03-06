import React, { useState } from 'react';
import '../../styles/Details.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


function Details() {
    const [selectedDate, setSelectedDate] = useState(null)

    const handleSubmit=(e)=>{
      e.preventDefault();
      alert('Your Booking has been confirmed!')
    }
  return (
<>
{/* <Router>
  <Navbar/>
</Router> */}
<form className="box" onSubmit={handleSubmit}>
  <h1>Enter your Details</h1>
  <input type="text" name="" placeholder="Full Name" />
  <input type="text" name="" placeholder="Age" />
  <input type="text" name="" placeholder="Gender" />
  <input type="text" name="" placeholder="Disease Description" />
  <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} 
  dateFormat='dd/MM/yyyy' minDate={new Date()} scrollableMonthYearDropdown
  placeholderText="Date of Appointment" />
  <input  type="submit" name="" value="Confirm Your Booking" />
</form>
</>
  )
}
export default Details;