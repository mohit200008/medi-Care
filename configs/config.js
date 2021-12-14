require('dotenv').config();
const prodmongoconfig = {
  mongoURI : process.env.MONGO_URI
};

const betamongoconfig = {
  mongoURI : process.env.MONGO_URI
}

const devmongoconfig = {
  mongoURI: process.env.MONGO_URI,
};


let mongo_config = {};

if (process.env.NODE_ENV === "production") {
  mongo_config = prodmongoconfig;
} else if (process.env.NODE_ENV === "beta") {
  mongo_config = betamongoconfig;
} else {
  mongo_config = devmongoconfig;
}



module.exports = { mongo_config };
