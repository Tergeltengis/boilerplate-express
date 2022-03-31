"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteMovieService = exports.addMovieService = exports.updateMovieByTitleService = exports.getMovieByTitleService = exports.getMoviesService = void 0;
const movie_1 = __importDefault(require("../models/movie"));
const getMoviesService = () => {
    return movie_1.default.find({});
};
exports.getMoviesService = getMoviesService;
const getMovieByTitleService = (request) => {
    return movie_1.default.find({}).where("title").equals(request);
};
exports.getMovieByTitleService = getMovieByTitleService;
const updateMovieByTitleService = (request) => {
    return movie_1.default.findByIdAndUpdate(request.params.id, request.body);
};
exports.updateMovieByTitleService = updateMovieByTitleService;
const addMovieService = (request) => {
    return new movie_1.default(request.body).save();
};
exports.addMovieService = addMovieService;
const deleteMovieService = (request) => {
    return movie_1.default.findByIdAndDelete(request.body._id);
};
exports.deleteMovieService = deleteMovieService;
