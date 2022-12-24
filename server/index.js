import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

// Database Connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Error => ", err));

app.get("/", (req, res) => {
  res.json({
    data: "Hello World!",
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
