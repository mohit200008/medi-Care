import React from "react";
import "../../styles/DiseaseDetection.css";
import "../../styles/Button_Animation.css";
import Data from "./Data";
import DPCard from "./Cards/DisPredicCard";


function DiseaseDetection() {
  return (
    <>
      <br></br>
      <br></br>
      <div className="header">Disease Prediction</div>
      <br></br>
      <br></br>
      <div className="grid-container">
        {
          Data.map((e,i)=>{
            return (
              <div className="grids">
              <DPCard
              img={e.img}
              title={e.title}
              subtitle={e.subtitle}
              para={e.para}
              url={e.url}
              key={i*Math.random()}
            />
            </div>)
          })
        }
      </div>
    </>
  );


}

export default DiseaseDetection;
