import express from "express";
import {
  deleteWishlist,
  getWishlist,
  postWishlist,
  putWishlist,
} from "../controllers/wishlist.js";

const router = express.Router();

router.route("/").get(getWishlist).post(postWishlist);
router.route("/:id").put(putWishlist).delete(deleteWishlist);

export default router;
