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
const app_1 = require("../../src/app");
const setupEnvironment_1 = require("../utils/setupEnvironment");
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, setupEnvironment_1.setupEnvironment)();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, setupEnvironment_1.tearDown)();
}));
describe("Testing movie CRUD", () => {
    it("It should be empty list before saving objects", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.app).get("/movies");
        expect(res.statusCode).toBe(200);
        const data = JSON.parse(res.text);
        expect(data.length).toBe(0);
    }));
    it("It should response movie object created", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.app).post("/title").send({
            title: "Movie name",
        });
        expect(res.statusCode).toBe(200);
        const data = JSON.parse(res.text);
        expect(data.length).toBe(0);
    }));
    it("It should response movie object created", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.app)
            .post("/movie")
            .send({
            title: "Movie name",
            director: "Director name",
            stars: ["Character 1", "Character 2"],
            year: 0,
        });
        expect(res.statusCode).toBe(201);
        const data = JSON.parse(res.text);
        expect(data.title).toBe("Movie name");
        expect(data.director).toBe("Director name");
        expect(data.stars).toStrictEqual(["Character 1", "Character 2"]);
        expect(data.year).toBe(0);
    }));
    it("After saving an object, list size should be 1", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.app).get("/movies");
        expect(res.statusCode).toBe(200);
        const data = JSON.parse(res.text);
        expect(data.length).toBe(1);
    }));
    it("Inserting data with invalid body and it should return 400", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.app).post("/movie").send({});
        expect(res.statusCode).toBe(400);
    }));
    it("Delete row with given _id that previously store", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(app_1.app)
            .post("/movie")
            .send({
            title: "Movie name",
            director: "Director name",
            stars: ["Character 1", "Character 2", "Character 3"],
            year: 0,
        });
        expect(res.statusCode).toBe(201);
        const data = JSON.parse(res.text);
        expect(data._id).toBeDefined();
        const _id = data._id;
        const deleteResponse = yield (0, supertest_1.default)(app_1.app).delete("/movie").send({ _id });
        expect(deleteResponse.statusCode).toBe(200);
    }));
    it("Try to delete not existing data and it should respond 404", () => __awaiter(void 0, void 0, void 0, function* () {
        const deleteResponse = yield (0, supertest_1.default)(app_1.app)
            .delete("/movie")
            .send({ _id: "Doesn't exist" });
        expect(deleteResponse.statusCode).toBe(500);
    }));
});
