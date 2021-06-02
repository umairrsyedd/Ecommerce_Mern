import express from "express";
const router = express.Router();
import { getProductById, getProducts } from "../Controllers/Product.js";

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
