const router = require("express").Router();
const { Doctor } = require("../models/Doctor");

const doctorRegister = async (req, res) => {
  const data = req.body;
  const errors = {};
  if (
    !data.doctorName ||
    !data.areaOfSpecialization || 
    !data.contactNumber ||
    !data.doctorReview ||
    data.doctorName === "" ||
    data.areaOfSpecialization === "" ||
    data.doctorReview === ""
    
  ) {
    errors["inputError"] = "Fields not provided";
  }
  try {
    if (!data.doctorName || !data.contactNumber || !data.areaOfSpecialization || !data.doctorReview) {
      return res.status(400).json({ error : errors["inputError"]});
    }
    // check duplicate phone Number
    let mobileNumber = data.contactNumber
    const numberExist = await Doctor.findOne({ contactNumber : mobileNumber });
    console.log(numberExist);

    if (numberExist) {
      return res.status(400).json({ message: "Mobile Number already exist !!" });
    }

    
    let newdoctor = new Doctor(data);
    newdoctor = await newdoctor.save();

    return res.status(200).json({ 
      type: "success",
      doctor_id: newdoctor.id });

  } catch (error) {
    return res.status(500).json({msg: error.message})
  }
};

module.exports =  { doctorRegister };