const express = require("express");
const router = express.Router();
const  { doctorRegister } = require("../controllers/doctorController")


//Routes
router.post('/register', doctorRegister);


module.exports = router;
