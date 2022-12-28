import React from "react";
import { Link } from "react-router-dom";
import "../../../styles/DiseaseDetection.css";
const DPCard = ({ img, title, subtitle, para, url }) => {
  return (
    <>
      <div className="outer">
        <img src={img} alt="Image" className="img-fluid pimg" />
        <div className="text-wrapper">
          <h5 className="text-center">{title}</h5>
          <h6 className="text-center">{subtitle}</h6>
          <p>{para}</p>
        </div>

        <a
          href={url}
          target="blank"
          className="pbtn link text-center"
          style={{ textDecoration: "none" }}
        >
          Predict
        </a>
      </div>
    </>
  );
};

export default DPCard;
