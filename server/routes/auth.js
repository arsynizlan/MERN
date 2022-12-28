import express from "express";

const router = express.Router();

/** Middlewares */
import { requireSignin, isAdmin } from "../middlewares/auth.js";

/** Controllers */
import { register, login, secret } from "../controllers/auth.js";

/** Authentication */
router.post("/register", register);
router.post("/login", login);
router.get("/auth-check", requireSignin, (req, res) => {
  res.json({ ok: true });
});
router.get("/admin-check", requireSignin, isAdmin, (req, res) => {
  res.json({ ok: true });
});
/** Testing */
router.get("/secret", requireSignin, isAdmin, secret);

export default router;
