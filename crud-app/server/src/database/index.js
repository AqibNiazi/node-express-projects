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
