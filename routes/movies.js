import express from "express";
import {
  getDiscover,
  getlatest,
  getNowplaying,
  getTrending,
} from "../controllers/movies.js";
import { addUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/discover/:id", getDiscover);
router.get("/latest/:id", getlatest);
router.get("/in_cinemas/:id", getNowplaying);
router.get("/trending/:id", getTrending);

router.post("/", addUsers);

export default router;
