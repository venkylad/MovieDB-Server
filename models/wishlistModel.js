import mongoose from "mongoose";

const wishlistSchema = new mongoose.Schema({
  original_title: {
    type: String,
  },
  original_language: {
    type: String,
  },
  title: {
    type: String,
  },
  backdrop_path: {
    type: String,
  },
  id: {
    type: Number,
    unique: true,
  },
  poster_path: {
    type: String,
  },
  adult: {
    type: Boolean,
  },
  overview: {
    type: String,
  },
  release_date: {
    type: String,
  },
  vote_average: {
    type: Number,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Wishlist = mongoose.model("Wishlist", wishlistSchema);

export default Wishlist;
