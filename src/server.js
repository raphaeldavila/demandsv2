"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
require("dotenv/config");
const app = (0, express_1.default)();
const db = process.env.DATABASE_URL;
const port = process.env.PORT;
mongoose_1.default.connect(db);
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.router);
app.listen(port || 5000, () => {
    console.log("Server is listening: " + port);
});
