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
exports.AdminController = void 0;
class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    verifyAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { userName, password } = req.body;
                if (!userName || !password) {
                    res.status(400).json({ success: false, message: "Missing credentials" });
                    return;
                }
                const result = yield this.adminService.verifyAdmin(userName, password);
                if (result.verified) {
                    req.session.verified = true;
                    res.status(200).json({ success: true, message: "Admin verified" });
                }
                else {
                    res.status(401).json({ success: false, message: "Invalid credentials" });
                }
            }
            catch (error) {
                console.error("Error during admin verification:", error);
                res.status(500).json({ success: false, message: "Internal server error" });
            }
        });
    }
    logOut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.session.destroy((err) => {
                    if (err) {
                        console.error("Error during logout:", err);
                        res.status(500).json({ success: false, message: "Logout failed" });
                        return;
                    }
                    res.status(200).json({ success: true, message: "Logout successful" });
                });
            }
            catch (error) {
                console.error("Error during logout:", error);
                res.status(500).json({ success: false, message: "Internal server error" });
            }
        });
    }
}
exports.AdminController = AdminController;
