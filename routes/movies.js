import express from "express";
import {
  getCast,
  getDiscover,
  getlatest,
  getMovie,
  getNowplaying,
  getRecommendations,
  getTrending,
  getVideos,
} from "../controllers/movies.js";

const router = express.Router();

router.get("/discover/:id", getDiscover);
router.get("/latest/:id", getlatest);
router.get("/in_cinemas/:id", getNowplaying);
router.get("/trending/:id", getTrending);
router.get("/movie/:id", getMovie);
router.get("/movie/videos/:id", getVideos);
router.get("/movie/recommendations/:id", getRecommendations);
router.get("/movie/cast/:id", getCast);

export default router;
