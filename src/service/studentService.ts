import { IStudent } from "../interfaces/IStudent.interface";
import { IStudentRepository } from "../repositories/istudentRepository";
import { IStudentService } from "./iStudent.Service";

export class StudentService implements IStudentService {
  private studentRepository: IStudentRepository;

  constructor(studentRepository: IStudentRepository) {
    this.studentRepository = studentRepository;
  }

  async createStudent(student: IStudent): Promise<IStudent> {
    const isExist = await this.studentRepository.findByName(student.name);

    if (isExist) {
      throw new Error("Student already exists");
    }

    return this.studentRepository.createStudent(student);
  }

  async updateStudent(
    id: string,
    student: Partial<IStudent>
  ): Promise<IStudent | null> {
    return this.studentRepository.updateStudent(id, student);
  }

  async findAllStudents(): Promise<IStudent[]> {
    return this.studentRepository.findAllStudents();
  }

  async findStudentByName(name: string): Promise<IStudent | null> {
    return this.studentRepository.findByName(name);
  }

  async findStudentById(id: string): Promise<IStudent | null> {
    return this.studentRepository.getById(id);
  }

  async deleteStudent(id: string): Promise<IStudent | null> {
    return this.studentRepository.deleteStudent(id);
  }
}
