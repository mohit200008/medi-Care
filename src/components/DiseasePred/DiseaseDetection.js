import React from "react";
import "./DiseaseDetection.css";

function DiseaseDetection() {
  return (
    <>
      <div className="header">Disease Prediction</div>
      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: "url(images/BreastCancer.jfif)" }}></div>
        </div>
        <div className="description">
          <h1>Breast Cancer Disease Prediction</h1>
          <h2>Detect breast cancer</h2>
          <div className="para-button">
            <p>Symptoms of breast cancer include a lump in the breast, bloody discharge from the nipple and changes in the shape or texture of the nipple or breast.</p>
            <button><a href="https://breastcancerdetectionweb.herokuapp.com/" target='_blank' style={{ textDecoration: "none" }}>
              Predict</a>
            </button>
          </div>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: "url(images/Diabeties.jpg)" }}></div>
        </div>
        <div className="description">
          <h1>Diabeties Prediction</h1>
          <h2>Predict the chances of getting diabeties</h2>
          <div className="para-button">
            <p>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat.</p>
            <button><a href="https://diabetiespredictionweb.herokuapp.com/" target='_blank' style={{ textDecoration: "none" }}>
              Predict</a>
            </button>
          </div>
        </div>
      </div>

      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: "url(images/heart.jpg)" }}></div>
        </div>
        <div className="description">
          <h1>Heart Disease</h1>
          <h2>Predict Heart Disease</h2>
          <div className="para-button">
          <p>It develops when the arteries that supply blood to the heart become clogged with plaque. This causes them to harden and narrow.</p>
          <button><a href="https://heartdiseasepredictionweb.herokuapp.com/" target='_blank' style={{ textDecoration: "none" }}>
            Predict</a>
          </button>
          </div>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{ backgroundImage: "url(images/kidney.png)" }}></div>
        </div>
        <div className="description">
          <h1>Kidney Disease</h1>
          <h2>Predict kidney disease</h2>
          <div className="para-button">
          <p>The kidneys filter waste and excess fluid from the blood. As kidneys fail, waste builds up.</p>
          <button><a href="https://kidneydiseasepredictionweb.herokuapp.com/ " target='_blank' style={{ textDecoration: "none" }}>
            Predict</a>
          </button>
          </div>
        </div>
      </div>
    </>
  );


}

export default DiseaseDetection;
