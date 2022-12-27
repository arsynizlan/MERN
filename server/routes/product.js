import express from "express";
import formiable from "express-formidable";

const router = express.Router();

/** Middlewares */
import { requireSignin, isAdmin } from "../middlewares/auth.js";

/** Controllers */
import {
  create,
  list,
  read,
  photo,
  remove,
  update,
} from "../controllers/product.js";

router.post("/product", requireSignin, isAdmin, formiable(), create);
router.delete(
  "/product/:productId",
  requireSignin,
  isAdmin,
  formiable(),
  remove
);
router.put("/product/:productId", requireSignin, isAdmin, formiable(), update);

router.get("/products", list);
router.get("/product/:slug", read);
router.get("/product/photo/:productId", photo);

export default router;
