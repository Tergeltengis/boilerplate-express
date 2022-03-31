"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const movieSchema = new Schema({
    title: { type: String, required: true },
    director: { type: String, required: true },
    stars: { type: Array, default: [], required: true },
    year: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});
const Movie = mongoose_1.default.model("movies", movieSchema);
exports.default = Movie;
