import express from "express";
import { addUsers, getUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.post("/", addUsers);

export default router;
