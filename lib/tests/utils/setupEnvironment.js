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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tearDown = exports.setupEnvironment = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const movie_1 = __importDefault(require("../../src/models/movie"));
const setupEnvironment = () => __awaiter(void 0, void 0, void 0, function* () {
    /* istanbul ignore next */
    if (!process.env.MONGODB_HOST) {
        process.env.MONGODB_HOST = "mongodb+srv://master:91625500@cluster0.4rfmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    }
    if (mongoose_1.default.connection.readyState === 0) {
        yield mongoose_1.default.connect(process.env.MONGODB_HOST, {});
        yield movie_1.default.deleteMany();
    }
});
exports.setupEnvironment = setupEnvironment;
const tearDown = () => __awaiter(void 0, void 0, void 0, function* () {
    yield movie_1.default.deleteMany();
    yield mongoose_1.default.connection.close();
});
exports.tearDown = tearDown;
