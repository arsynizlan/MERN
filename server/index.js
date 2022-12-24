import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.json({
    data: "Hello World!",
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
