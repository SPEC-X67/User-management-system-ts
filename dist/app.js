"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const express_1 = __importDefault(require("express"));
const studentController_1 = require("./controllers/studentController");
const studentService_1 = require("./service/studentService");
const studentRepositoy_1 = require("./repositories/studentRepositoy");
const routes_1 = require("./routes/routes");
const nocache_1 = __importDefault(require("nocache"));
const express_session_1 = __importDefault(require("express-session"));
const authController_1 = require("./controllers/authController");
const adminRepository_1 = require("./repositories/adminRepository");
const adminService_1 = require("./service/adminService");
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.setMiddlewares();
        this.setTestRoute();
        this.setStudentRoute();
    }
    setMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, express_session_1.default)({
            secret: "secret-key-is-here",
            resave: false,
            saveUninitialized: true,
        }));
        this.app.use((0, nocache_1.default)());
    }
    setTestRoute() {
        this.app.get("/", (req, res) => {
            res.json({ message: "Server is up" });
        });
    }
    setStudentRoute() {
        const studentController = this.injectStudent();
        const adminController = this.injectAdmin();
        const studentRouter = new routes_1.StudentRoutes(studentController, adminController);
        this.app.use("/", studentRouter.getRoutes());
    }
    injectStudent() {
        const studentRepository = new studentRepositoy_1.StudentRepository();
        const studentService = new studentService_1.StudentService(studentRepository);
        return new studentController_1.StudentController(studentService);
    }
    injectAdmin() {
        const adminRepository = new adminRepository_1.AdminRepository();
        const adminService = new adminService_1.AdminService(adminRepository);
        return new authController_1.AdminController(adminService);
    }
    getApp() {
        return this.app;
    }
}
exports.App = App;
