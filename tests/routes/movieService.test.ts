import request from "supertest";
import { app } from "../../app";
import { setupEnvironment, tearDown } from "../utils/setupEnvironment";

beforeAll(async () => {
  await setupEnvironment();
});

afterAll(async () => {
  await tearDown();
});
describe("Testing movie CRUD", () => {
  it("It should be empty list before saving objects", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(0);
  });

  it("It should response movie object created", async () => {
    const res = await request(app).post("/title").send({
      title: "Movie name",
    });
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(0);
  });

  it("It should response movie object created", async () => {
    const res = await request(app)
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
  });

  it("After saving an object, list size should be 1", async () => {
    const res = await request(app).get("/movies");
    expect(res.statusCode).toBe(200);
    const data = JSON.parse(res.text);
    expect(data.length).toBe(1);
  });

  it("Inserting data with invalid body and it should return 400", async () => {
    const res = await request(app).post("/movie").send({});
    expect(res.statusCode).toBe(400);
  });

  it("Delete row with given _id that previously store", async () => {
    const res = await request(app)
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
    const deleteResponse = await request(app).delete("/movie").send({ _id });

    expect(deleteResponse.statusCode).toBe(200);
  });

  it("Try to delete not existing data and it should respond 404", async () => {
    const deleteResponse = await request(app)
      .delete("/movie")
      .send({ _id: "Doesn't exist" });

    expect(deleteResponse.statusCode).toBe(500);
  });
});
