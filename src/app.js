// @Dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require('multer');
const m = multer();

// @Modules
const router = require("./routes");
const {
  authentication,
  dataLogger,
  errorHandler
} = require("./middlewares");

// @Constants
const PORT = 9009;

// @Init-Server
const app = express();
app.timeout = 300000;

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(m.none())

app.use(dataLogger);
app.use(authentication);

// @Routes
app.use("/api/placementing", router);

// @Error-Handler
app.use(errorHandler);

// @Start-Server
(async (server) => {
  try {
    server.listen(
      PORT,
      console.log("Placementing server started at: ", new Date(), "\nOn port ", PORT)
    );
  } catch (e) {
    console.log(
      "Error occured Starting server ::: ",
      e
    );
  }
})(app);