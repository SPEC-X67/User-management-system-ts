"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const connectDatabase_1 = require("./config/connectDatabase");
const app = new app_1.App();
const database = new connectDatabase_1.ConnectMongoDB();
database.connectDB();
app
    .getApp()
    .listen(3000, () => console.log(`Server is running on http://127.0.0.1:3000`));
