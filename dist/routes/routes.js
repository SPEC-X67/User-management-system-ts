"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
class StudentRoutes {
    constructor(studentController, adminController) {
        this.router = express_1.default.Router();
        this.studentController = studentController;
        this.adminController = adminController;
        this.router = express_1.default.Router();
        this.setRoutes();
    }
    setRoutes() {
        // Admin Routes
        this.router.post("/login", (req, res) => this.adminController.verifyAdmin(req, res));
        this.router.get("/logout", (req, res) => this.adminController.logOut(req, res));
        // Student Routes
        this.router.post("/create-student", auth_1.authMiddleware, (req, res) => this.studentController.createStudent(req, res));
        this.router.get("/student/:id", auth_1.authMiddleware, (req, res) => this.studentController.findStudentById(req, res));
        this.router.put("/student/:id", auth_1.authMiddleware, (req, res) => this.studentController.updateStudent(req, res));
        this.router.get("/students", auth_1.authMiddleware, (req, res) => this.studentController.findAllStudents(req, res));
        this.router.delete("/student/:id", auth_1.authMiddleware, (req, res) => this.studentController.deleteStudent(req, res));
    }
    getRoutes() {
        return this.router;
    }
}
exports.StudentRoutes = StudentRoutes;
