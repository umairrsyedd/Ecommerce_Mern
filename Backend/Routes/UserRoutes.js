import express from "express";
const router = express.Router();
import { authUser, getUserProfile, registerUser } from "../Controllers/User.js";
import { protect } from "../Middleware/authMiddleware.js";
router.route("/login").post(authUser);
router.route("/profile").get(protect, getUserProfile);
router.route("/").post(registerUser);
export default router;
