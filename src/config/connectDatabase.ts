import mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/students"

export class ConnectMongoDB {
  private databaseUrl: string;
  constructor() {
    if (!mongoUrl) {
      throw new Error("MONGODB_CONNECTION_STRING is not defined");
    }
    this.databaseUrl = mongoUrl
    ;
  }

  connectDB() {
    mongoose
      .connect(this.databaseUrl)
      .then(() => console.log("Database connected"))
      .catch((error) => console.error(error));
  }
}