import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
  res.json({
    data: "Arsy Nizlan",
  });
});

export default router;
console.log(router);
