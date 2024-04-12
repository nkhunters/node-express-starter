import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { router } from "./routes";

const app = express();

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

app.use("/api", router);

app.get("/health-check", (req, res) => {
  const data = {
    uptime: process.uptime(),
    message: "Ok",
    date: new Date(),
  };

  res.status(200).send(data);
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server is running on port ${process.env.PORT || 3001}`);
  mongoose.connect(process.env.MONGODB_URI || "");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});
