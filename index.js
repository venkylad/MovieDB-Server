import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import WishlistRoutes from "./routes/wishlist.js";
import MoviesRoutes from "./routes/movies.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", MoviesRoutes);
app.use("/api/wishlist", WishlistRoutes);

app.get("/", (req, res) => res.send("JAFFA"));

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
  })
  .catch((err) => console.log(err.message));
