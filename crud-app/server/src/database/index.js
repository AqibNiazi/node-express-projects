require("dotenv").config();
const mongoose = require("mongoose");
module.exports = async () => {
  try {
    // console.log(process.env.DB_CONNECTION);
    await mongoose.connect(process.env.DB_CONNECTION);
    console.log("Database Connected");
  } catch (error) {
    console.error(error);
  }
};
