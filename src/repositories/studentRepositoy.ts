import { IStudent } from "../interfaces/IStudent.interface";
import { IStudentRepository } from "../repositories/istudentRepository";
import studentModel from "../models/student.model";

export class StudentRepository implements IStudentRepository {
  async createStudent(student: IStudent): Promise<IStudent> {
    return studentModel.create(student);
  }

  async updateStudent(id: string, student: Partial<IStudent>): Promise<IStudent | null> {
    return studentModel.findByIdAndUpdate(id, student, { new: true });
  }

  async findAllStudents(): Promise<IStudent[]> {
    return studentModel.find();
  }

  async findByName(name: string): Promise<IStudent | null> {
    return studentModel.findOne({ name });
  }

  async getById(id: string): Promise<IStudent | null> {
    return studentModel.findById(id);
  }

  async deleteStudent(id: string): Promise<IStudent | null> {
    return studentModel.findByIdAndDelete(id);
  }
}
