import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router from "./router.js";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.get("/", (request, response) => {
  response.json({
    message: "hello world",
  });
});

app.use(router);

const MONGO_URL = process.env.MONGO_URL;

app.listen(5000, () => {
  console.log("Server is running (some change)");
  try {
    mongoose
      .connect(MONGO_URL)
      .then(() => console.log("db connected!"))
      .catch(() => console.log("DB not connected :("));
  } catch (error) {
    console.log("error in connecting db:", error);
  }
});

// run node index.js or npm run start
