import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/DiseaseDetection.css";
const DPCard = ({ img, title, subtitle, para, url }) => {
  return (
    <>
      <div className="outer">
      <h2 className="text-center">{title}</h2>
        <img src={img} alt="Image" className="img12" />
        <div className="text-wrapper">
         
          <h4 className="text-center text-primary">{subtitle}</h4>
          <p>{para}</p>
        </div>

        <a
          href={url}
          target="blank"
          className="btn1"
        >
          Predict
        </a>
      </div>
    </>
  );
};

export default DPCard;
