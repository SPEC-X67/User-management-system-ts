import mongoose from "mongoose";
import { IStudent } from "../interfaces/IStudent.interface";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IStudent>("students", studentSchema);
