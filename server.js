const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
// const cors = require("cors")
require('dotenv').config();
const connect = require("./mongodb");
const App = express();


//port
const PORT = process.env.PORT || 5001;

//Middlewares global
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(helmet());
App.use(morgan("common"));
// App.use(cors())

const connection = connect;

if (process.env.NODE_ENV === "production") {
}

App.get("/", (req, res) => {
  res.status(200).send("Incorrect Path");
});

App.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || SERVER_ERR;
  const data = err.data || null;
  res.status(status).json({
    type: "error",
    message,
    data,
  });
});

App.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,PUT,OPTIONS');
  if (req.method === 'OPTIONS') {
      res.sendStatus(200);
  }
  else {
      next();
  }
});

//Routers

const doctorRouter = require("./routes/doctor")

//ROUTES

App.use("/doctor", doctorRouter)


//  Listening Server
App.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
  // console.log(process.env.NODE_ENV)
});

