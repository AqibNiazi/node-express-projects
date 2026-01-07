///////////////////////////Code for Local use /////////////////////////

require("dotenv").config();
const mongoose = require("mongoose");
module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};

////////////////////// Code for production use//////////////////////////

// const mongoose = require("mongoose");

// let isConnected = false;

// const connectDB = async () => {
//   if (isConnected) return;

//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     isConnected = true;
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.error("MongoDB connection error", error);
//     throw error;
//   }
// };

// module.exports = connectDB;
