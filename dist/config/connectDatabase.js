"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoUrl = "mongodb://localhost:27017/students";
class ConnectMongoDB {
    constructor() {
        if (!mongoUrl) {
            throw new Error("MONGODB_CONNECTION_STRING is not defined");
        }
        this.databaseUrl = mongoUrl;
    }
    connectDB() {
        mongoose_1.default
            .connect(this.databaseUrl)
            .then(() => console.log("Database connected"))
            .catch((error) => console.error(error));
    }
}
exports.ConnectMongoDB = ConnectMongoDB;
