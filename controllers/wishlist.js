import User from "../models/postUsers.js";
import Wishlist from "../models/wishlistModel.js";

export const getWishlist = async (req, res) => {
  try {
    const movies = await Wishlist.find({ user: req.user.id });
    res
      .status(200)
      .json({ count: movies?.length, message: "got wishlists", movies });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const postWishlist = async (req, res) => {
  try {
    const {
      original_title,
      original_language,
      title,
      backdrop_path,
      id,
      poster_path,
      adult,
      overview,
      release_date,
      vote_average,
    } = req.body;

    const movieExists = await Wishlist.findOne({ id });

    if (movieExists) {
      res.status(400).json({ message: "Movie already exists in whislist" });
    } else {
      const movie = await Wishlist.create({
        original_title,
        original_language,
        title,
        backdrop_path,
        id,
        poster_path,
        adult,
        overview,
        release_date,
        vote_average,
        user: req.user.id,
      });
      res.status(200).json({ message: "posted to wishlists", movie });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteWishlist = async (req, res) => {
  try {
    const movie = await Wishlist.findById(req.params.id);
    if (!movie) {
      res.status(400).json({ message: "Movie is not in youe wishlist" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      res.status(400).json({ message: "User not found" });
    }

    if (movie.user.toString() !== user.id) {
      res.status(401).json({ message: "User not authorized" });
    } else if (movie && user && movie.user.toString() === user.id) {
      await Wishlist.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Movie from wishlist deleted" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
