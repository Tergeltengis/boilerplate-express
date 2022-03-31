"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const movieControllers_1 = require("../controller/movieControllers");
const movieRouter = express_1.default.Router();
movieRouter.get("/movies", movieControllers_1.getMovies);
movieRouter.get("/movie/:title", movieControllers_1.getMovieByTitle);
movieRouter.patch("/movie/:id", movieControllers_1.updateMovieByTitle);
movieRouter.post("/movie", movieControllers_1.createMovie);
movieRouter.delete("/movie", movieControllers_1.deleteMovie);
exports.default = movieRouter;
