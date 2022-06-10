// import PostUser from "../models/postUsers.js";

import axios from "axios";

export const getDiscover = async (req, res) => {
  await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=d8e97d396562cfba24086104028f28e3&language=en-US&page=${req.params.id}`
  )
    .then(({ data }) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
};

export const getlatest = async (req, res) => {
  await axios(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=d8e97d396562cfba24086104028f28e3&language=en-US&page=${req.params.id}`
  )
    .then(({ data }) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
};

export const getNowplaying = async (req, res) => {
  await axios(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=d8e97d396562cfba24086104028f28e3&language=en-US&page=${req.params.id}`
  )
    .then(({ data }) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
};

export const getTrending = async (req, res) => {
  await axios(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=d8e97d396562cfba24086104028f28e3&language=en-US&page=${req.params.id}`
  )
    .then(({ data }) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
};
