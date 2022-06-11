import express from "express";
import { registerUser, loginUser, getUser } from "../controllers/user.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/me", protect, getUser);

export default router;
