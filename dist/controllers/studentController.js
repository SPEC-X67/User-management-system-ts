"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = req.body;
                const newStudent = yield this.studentService.createStudent(student);
                res.status(201).json({ success: true, message: "Student created!", newStudent });
            }
            catch (error) {
                this.handleError(res, error, "Error creating student");
            }
        });
    }
    updateStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const student = req.body;
                const updatedStudent = yield this.studentService.updateStudent(id, student);
                if (!updatedStudent) {
                    res.status(404).json({ success: false, message: "Student not found" });
                    return;
                }
                res.status(200).json({ success: true, message: "Student updated!", updatedStudent });
            }
            catch (error) {
                this.handleError(res, error, "Error updating student");
            }
        });
    }
    findAllStudents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield this.studentService.findAllStudents();
                res.status(200).json(students);
            }
            catch (error) {
                this.handleError(res, error, "Error fetching students");
            }
        });
    }
    findStudentByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const name = req.params.name;
                const student = yield this.studentService.findStudentByName(name);
                if (!student) {
                    res.status(404).json({ success: false, message: "Student not found" });
                    return;
                }
                res.status(200).json(student);
            }
            catch (error) {
                this.handleError(res, error, "Error fetching student by name");
            }
        });
    }
    findStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const student = yield this.studentService.findStudentById(id);
                if (!student) {
                    res.status(404).json({ success: false, message: "Student not found" });
                    return;
                }
                res.status(200).json(student);
            }
            catch (error) {
                this.handleError(res, error, "Error fetching student by ID");
            }
        });
    }
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deletedStudent = yield this.studentService.deleteStudent(id);
                if (!deletedStudent) {
                    res.status(404).json({ success: false, message: "Student not found" });
                    return;
                }
                res.status(200).json({ success: true, message: "Student deleted!", deletedStudent });
            }
            catch (error) {
                this.handleError(res, error, "Error deleting student");
            }
        });
    }
    handleError(res, error, message) {
        console.error(message, error);
        res.status(500).json({ success: false, message });
    }
}
exports.StudentController = StudentController;
