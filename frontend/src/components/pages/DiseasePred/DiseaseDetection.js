<<<<<<< HEAD:frontend/src/components/pages/DiseasePred/DiseaseDetection.js
import React, { useState } from "react";
import "./css/DiseaseDetection.css";
import "./css/w3.css";
import HeartDiseaseForm from "./HeartDiseasePred/HeartDiseaseForm";
import KidneyDiseaseForm from "./KidneyDiseasePred/KidneyDiseaseForm";

=======
import React from "react";
import "../../styles/DiseaseDetection.css";
import "../../styles/Button_Animation.css"
import Data from "./Data";
import DPCard from "./Cards/DisPredicCard";
>>>>>>> 0759c27b994cbdb37ce003aec6157bb6cb4e2213:src/components/DiseasePred/DiseaseDetection.js
function DiseaseDetection() {
  const [heart,setHeart] = useState(false);
  const [kidney,setKidney] = useState(false);
  const handleheartpredict = () => {setHeart(true)};
  const handlekidneypredict = () => {setKidney(true)};
  if (heart){
    return <HeartDiseaseForm />;
  }
  else if (kidney){
    return <KidneyDiseaseForm />
  }
  return (
<<<<<<< HEAD:frontend/src/components/pages/DiseasePred/DiseaseDetection.js
    <div>
    <br></br>
    <div className="header w3-text-white ">Disease Prediction</div>
      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: "url(../../../../static/images/BreastCancer.jfif)" }}></div>
        </div>
        <div className="description">
          <h1>Breast cancer Disease Prediction</h1>
          <h2>Detect breast cancer</h2>
          <p>Symptoms of breast cancer include a lump in the breast, bloody discharge from the nipple and changes in the shape or texture of the nipple or breast.</p>
          <button className="w3-button w3-green w3-hover-light-green " ><a href="https://breastcancerdetectionweb.herokuapp.com/" target='_blank' style={{ textDecoration: "none" }}>
            Predict</a>
          </button>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: "url(../../../../static/images/Diabeties.jpg)" }}></div>
        </div>
        <div className="description">
          <h1>Diabeties prediction</h1>
          <h2>Predict the chances of getting diabeties</h2>
          <p>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat.</p>
          <button className="w3-button w3-green w3-hover-light-green " ><a href="https://diabetiespredictionweb.herokuapp.com/" target='_blank' style={{ textDecoration: "none" }}>
            Predict</a>
          </button>
        </div>
      </div>

      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: "url(../../../../static/images/heart.jpg)" }}></div>
        </div>
        <div className="description">
          <h1>Heart disease</h1>
          <h2>Predict Heart Disease</h2>
          <p>It develops when the arteries that supply blood to the heart become clogged with plaque. This causes them to harden and narrow.</p>
          <button className="w3-button w3-green w3-hover-light-green " onClick={ handleheartpredict } >
            <a>Predict</a>
          </button>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: "url(../../../../static/images/kidney.png)" }}></div>
        </div>
        <div className="description">
          <h1>Kidney disease</h1>
          <h2>Predict kidney disease</h2>
          <p>The kidneys filter waste and excess fluid from the blood. As kidneys fail, waste builds up.</p>
          <button className="w3-button w3-green w3-hover-light-green " onClick={ handlekidneypredict } >
          <a>Predict</a>
          </button>
        </div>
=======
    <>
      <div className="header">Disease Prediction</div>
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
>>>>>>> 0759c27b994cbdb37ce003aec6157bb6cb4e2213:src/components/DiseasePred/DiseaseDetection.js
      </div>
    </div>
  );


}

export default DiseaseDetection;