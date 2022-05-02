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
      <div className="row d-flex justify-content-center">
        {
          Data.map((e,i)=>{
            return <DPCard
              img={e.img}
              title={e.title}
              subtitle={e.subtitle}
              para={e.para}
              url={e.url}
              key={i*Math.random()}


            />
          })
        }
      </div>
    </>
  );


}

export default DiseaseDetection;
