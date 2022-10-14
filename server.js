import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";

const app = express();

dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", userRoutes);

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(3001, () => {
      console.log(
        "DB connected and the server is listening for requests on port 3001...🐒",
      );
    }),
  )
  .catch((error) =>
    console.log("Sorry, database didn't connect ☹️" + error.message),
  );
