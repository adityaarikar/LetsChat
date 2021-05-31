const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

const app = express();

dotenv.config();

//middleWares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

mongoose.connect(
  process.env.MongooDB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Successfully Connected to DataBase...");
  }
);

app.listen(8080, () => {
  console.log("Sussefully connected to server...");
});
