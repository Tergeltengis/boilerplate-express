import express from "express";
import {
  getMovies,
  getMovieByTitle,
  createMovie,
  deleteMovie,
} from "../controller/movieControllers";
const movieRouter = express.Router();

movieRouter.get("/movies", getMovies);
movieRouter.post("/title", getMovieByTitle);
movieRouter.post("/movie", createMovie);
movieRouter.delete("/movie", deleteMovie);

export default movieRouter;
