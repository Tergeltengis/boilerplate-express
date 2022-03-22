import Movie from "../models/movie";
import { Request } from "express";

export const getMoviesService = () => {
  return Movie.find({});
};

export const getMovieByTitleService = (request: string) => {
  return Movie.find({}).where("title").equals(request);
};

export const updateMovieByTitleService = (request: Request) => {
  return Movie.findByIdAndUpdate(request.params.id, request.body);
};

export const addMovieService = (request: Request) => {
  return new Movie(request.body).save();
};

export const deleteMovieService = (request: Request) => {
  return Movie.findByIdAndDelete(request.body._id);
};
