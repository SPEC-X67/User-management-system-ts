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
exports.StudentService = void 0;
class StudentService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    createStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            const isExist = yield this.studentRepository.findByName(student.name);
            if (isExist) {
                throw new Error("Student already exists");
            }
            return this.studentRepository.createStudent(student);
        });
    }
    updateStudent(id, student) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.studentRepository.updateStudent(id, student);
        });
    }
    findAllStudents() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.studentRepository.findAllStudents();
        });
    }
    findStudentByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.studentRepository.findByName(name);
        });
    }
    findStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.studentRepository.getById(id);
        });
    }
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.studentRepository.deleteStudent(id);
        });
    }
}
exports.StudentService = StudentService;
