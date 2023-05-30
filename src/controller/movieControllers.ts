import {
  getMovieByTitleService,
  getMoviesService,
  addMovieService,
  deleteMovieService,
  updateMovieByTitleService,
} from "../services/movieService";
import { Request, Response } from "express";

export const getMovies = async (request: Request, response: Response) => {
  try {
    response.send(await getMoviesService());
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const getMovieByTitle = async (request: Request, response: Response) => {
  try {
    const result = await getMovieByTitleService(request.params.title);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const updateMovieByTitle = async (
  request: Request,
  response: Response
) => {
  try {
    const result = await updateMovieByTitleService(request);
    response.status(200).send(result);
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};

export const createMovie = async (request: Request, response: Response) => {
  try {
    const result = await addMovieService(request);
    response.status(201).send(result);
  } catch (error) {
    response.status(400).send(error);
  }
};

export const deleteMovie = async (request: Request, response: Response) => {
  try {
    await deleteMovieService(request);
    response.status(200).send({
      message: "Deleted successfully",
    });
  } catch (error) {
    /* istanbul ignore next */
    response.status(500).send(error);
  }
};
