const mongoose = require("mongoose")
require("dotenv").config();

const doctorSchema = new mongoose.Schema(
  {
    doctorName: { type: String, maxlength: 50 , required : true},
    age : { type : Number},
    areaOfSpecialization : {type : String , required : true},
    yearOfExperience : {type : Number },
    doctorReview : {type : String, required : true},
    contactNumber : {type : Number , required : true, unique : true, minlength : 10},
    address : {type : String}
  }
  ,
  { timestamps: true }
  )


const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = { Doctor };