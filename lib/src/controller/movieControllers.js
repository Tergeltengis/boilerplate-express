"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovie = exports.createMovie = exports.updateMovieByTitle = exports.getMovieByTitle = exports.getMovies = void 0;
const movieService_1 = require("../services/movieService");
const getMovies = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        response.send(yield (0, movieService_1.getMoviesService)());
    }
    catch (error) {
        /* istanbul ignore next */
        response.status(500).send(error);
    }
});
exports.getMovies = getMovies;
const getMovieByTitle = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, movieService_1.getMovieByTitleService)(request.params.title);
        response.status(200).send(result);
    }
    catch (error) {
        /* istanbul ignore next */
        response.status(500).send(error);
    }
});
exports.getMovieByTitle = getMovieByTitle;
const updateMovieByTitle = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, movieService_1.updateMovieByTitleService)(request);
        response.status(200).send(result);
    }
    catch (error) {
        /* istanbul ignore next */
        response.status(500).send(error);
    }
});
exports.updateMovieByTitle = updateMovieByTitle;
const createMovie = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, movieService_1.addMovieService)(request);
        response.status(201).send(result);
    }
    catch (error) {
        response.status(400).send(error);
    }
});
exports.createMovie = createMovie;
const deleteMovie = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, movieService_1.deleteMovieService)(request);
        response.status(200).send({
            message: "Deleted successfully",
        });
    }
    catch (error) {
        /* istanbul ignore next */
        response.status(500).send(error);
    }
});
exports.deleteMovie = deleteMovie;
