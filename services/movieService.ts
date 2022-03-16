import Movie from "../models/movie";
import { Request } from "express";

export const getMoviesService = () => {
  return Movie.find({});
};

export const getMovieByTitleService = (request: Request) => {
  return Movie.find({}).where("title").equals(request.body.title);
};

export const addMovieService = (request: Request) => {
  return new Movie(request.body).save();
};

export const deleteMovieService = (request: Request) => {
  return Movie.findByIdAndDelete(request.body._id);
};
