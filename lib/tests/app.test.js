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
const supertest_1 = __importDefault(require("supertest"));
require("babel-polyfill");
const app_1 = require("../src/app");
const setupEnvironment_1 = require("./utils/setupEnvironment");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, setupEnvironment_1.setupEnvironment)();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, setupEnvironment_1.tearDown)();
}));
describe("Test the root path content", () => {
    it("It should response the GET text", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.app).get("/");
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe("SERVICE RUNNING");
    }));
});
