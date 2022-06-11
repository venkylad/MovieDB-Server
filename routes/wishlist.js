import express from "express";
import {
  deleteWishlist,
  getWishlist,
  postWishlist,
} from "../controllers/wishlist.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getWishlist).post(protect, postWishlist);
router.route("/:id").delete(protect, deleteWishlist);

export default router;
