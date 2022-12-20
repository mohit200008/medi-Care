import React from 'react'

function Chart() {
    let myStyle={
        textShadow:'2px 2px darkgrey',
        fontWeight:'bold',
        fontSize:'5vh',
        textDecoration:'underline',
        paddingBottom:'15px'


    }
    let mStyle={
        padding:'15px',
        fontSize:'2.5vh'
    }
    let lStyle={
        position: 'absolute',
        right: '15px',
        top: '8vh',
        fontSize: '20px'
    }
    let date={
        position: 'absolute',
        right: '15px',
        top: '10vh',
        fontSize: '20px'
    }
  return (
    <div>
            <div className="container-fluid p-5 bg-light text-center my-3">
    <h1 style={myStyle}>Covid-19 INDIA</h1>
    <h3 style={mStyle}>Spread Trends Of Your State</h3>
  
</div>
<div className="container">
   <div className="row text-center">
    <div className="col-3 text-warning">
        <h2 className="font-weight-bold">Total_Confirmed</h2>
        <p id="confirmed"></p>
    </div>
    <div className="col-3 text-info">
        <h2 className="font-weight-bold">Total_Active</h2>
        <p id="active"></p>
    </div>
    <div className="col-3 text-success">
        <h2 className="font-weight-bold">Total_Recovered</h2>
        <p id="recovered"></p>
    </div>
    <div className="col-3 text-danger">
        <h2 className="font-weight-bold">Total_Deceased</h2>
        <p id="deceased"></p>
    </div>
    <div className=" text-danger" style={lStyle}>
        <h2 className="font-weight-bold"style={lStyle}>Last_Updated_Time</h2>
        <p id="update" style={date}></p>
    </div>
   </div>
   <canvas id="confirmedChart"></canvas>
   <canvas id="activeChart"></canvas>
 
   <canvas id="recoveredChart"></canvas>
   <canvas id="deathChart"></canvas>
</div>
    </div>
  )
}

export default Chart