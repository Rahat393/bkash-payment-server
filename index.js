const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const port = process.env.PORT || 5000;
app.use(body_parser.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", require("./routes/routes"));
const db = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.name}:${process.env.pass}@cluster0.t3gmucz.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("db connect");
  } catch (error) {}
};
db();

app.get("/", (req, res) => {
  res.send("bkash Server is running...");
});

app.listen(port, () => {
  console.log(`bkash Server is running...on ${port}`);
});
