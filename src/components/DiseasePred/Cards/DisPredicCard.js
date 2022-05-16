import React from "react";
import { Link } from "react-router-dom";
const DPCard = ({ img, title, subtitle, para, url }) => {
  return (
    <>
      <div className="col-md-5 col-lg-5 col-10 center mt-4">
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
