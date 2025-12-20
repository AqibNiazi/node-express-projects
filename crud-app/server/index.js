require("dotenv").config();
const express = require("express");
// const router = require("./src/routes");
const bodyParser = require("body-parser");
const database = require("./src/database");
// const cookieParser = require("cookie-parser");
const cors = require("cors");
const HOST = process.env.HOST;
const app = express();
const PORT = process.env.PORT || 3000;
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
// app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    // [
    //     "http://192.168.100.77:3000",
    // ],
    credentials: true,
  })
);

const NodeJsServer = async () => {
  try {
    app.use(bodyParser.json()); //express.json()
    // app.use("/whatsapp", router);
    await database();
    app.listen(process.env.PORT, process.env.HOST, () => {
      console.log(`Backend server is running at http://${HOST}:${PORT}`);
      console.log("Server running");
    });
  } catch (error) {
    console.log("error", error);
  }
};
NodeJsServer();
