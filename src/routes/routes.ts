import express from "express";
import {
  getMovies,
  getMovieByTitle,
  createMovie,
  deleteMovie,
  updateMovieByTitle,
} from "../controller/movieControllers";
const movieRouter = express.Router();

movieRouter.get("/movies", getMovies);
movieRouter.get("/movie/:title", getMovieByTitle);
movieRouter.patch("/movie/:id", updateMovieByTitle);
movieRouter.post("/movie", createMovie);
movieRouter.delete("/movie", deleteMovie);

export default movieRouter;
