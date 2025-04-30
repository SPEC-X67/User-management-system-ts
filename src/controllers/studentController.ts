import { IStudent } from "../interfaces/IStudent.interface";
import { Request, Response } from "express";
import { IStudentService } from "../service/iStudent.Service";

export class StudentController {
  private studentService: IStudentService;

  constructor(studentService: IStudentService) {
    this.studentService = studentService;
  }

  async createStudent(req: Request, res: Response): Promise<void> {
    try {
      const student: IStudent = req.body;
      const newStudent = await this.studentService.createStudent(student);
      res.status(201).json({ success: true, message: "Student created!", newStudent });
    } catch (error) {
      this.handleError(res, error, "Error creating student");
    }
  }

  async updateStudent(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const student: Partial<IStudent> = req.body;
      const updatedStudent = await this.studentService.updateStudent(id, student);

      if (!updatedStudent) {
        res.status(404).json({ success: false, message: "Student not found" });
        return;
      }

      res.status(200).json({ success: true, message: "Student updated!", updatedStudent });
    } catch (error) {
      this.handleError(res, error, "Error updating student");
    }
  }

  async findAllStudents(req: Request, res: Response): Promise<void> {
    try {
      const students = await this.studentService.findAllStudents();
      res.status(200).json(students);
    } catch (error) {
      this.handleError(res, error, "Error fetching students");
    }
  }

  async findStudentByName(req: Request, res: Response): Promise<void> {
    try {
      const name = req.params.name;
      const student = await this.studentService.findStudentByName(name);

      if (!student) {
        res.status(404).json({ success: false, message: "Student not found" });
        return;
      }

      res.status(200).json(student);
    } catch (error) {
      this.handleError(res, error, "Error fetching student by name");
    }
  }

  async findStudentById(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const student = await this.studentService.findStudentById(id);

      if (!student) {
        res.status(404).json({ success: false, message: "Student not found" });
        return;
      }

      res.status(200).json(student);
    } catch (error) {
      this.handleError(res, error, "Error fetching student by ID");
    }
  }

  async deleteStudent(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;
      const deletedStudent = await this.studentService.deleteStudent(id);

      if (!deletedStudent) {
        res.status(404).json({ success: false, message: "Student not found" });
        return;
      }

      res.status(200).json({ success: true, message: "Student deleted!", deletedStudent });
    } catch (error) {
      this.handleError(res, error, "Error deleting student");
    }
  }

  private handleError(res: Response, error: unknown, message: string): void {
    console.error(message, error);
    res.status(500).json({ success: false, message });
  }
}
