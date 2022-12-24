import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json({
    data: "Hello World!",
  });
});

app.listen(8000, () => {
  console.log("listening on http://localhost:8000");
});
