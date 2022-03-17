import mongoose from "mongoose";
import Movie from "../../src/models/movie";

const setupEnvironment = async () => {
  /* istanbul ignore next */
  if (!process.env.MONGODB_HOST) {
    process.env.MONGODB_HOST = "mongodb+srv://master:91625500@cluster0.4rfmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  }
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_HOST, {});
    await Movie.deleteMany();
  }
};

const tearDown = async () => {
  await Movie.deleteMany();
  await mongoose.connection.close();
};

export { setupEnvironment, tearDown };
