"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
const uri = "mongodb+srv://master:91625500@cluster0.4rfmv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose_1.default.connect(uri);
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});
app_1.app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
