import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const DPCard = ({ img, title, subtitle, para, url }) => {
  return (
    <>
      <div className="col-md-5 col-lg-5 col-10 center mt-4">
        <img src={img} alt="Image" className="img-fluid pimg" />
        <div className="text-wrapper ">
          <h5 className="text-center title">{title}</h5>
          <h6 className="text-center sub-title">{subtitle}</h6>
          <p className="para">{para}</p>
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
