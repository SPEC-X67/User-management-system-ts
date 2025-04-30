import { Request, Response } from "express";
import { IAdminService } from "../service/iAdmin.service";

export class AdminController {
  private adminService: IAdminService;

  constructor(adminService: IAdminService) {
    this.adminService = adminService;
  }

  async verifyAdmin(req: Request, res: Response): Promise<void> {
    try {
      const { userName, password } = req.body;

      if (!userName || !password) {
        res.status(400).json({ success: false, message: "Missing credentials" });
        return;
      }

      const result = await this.adminService.verifyAdmin(userName, password);

      if (result.verified) {
        req.session.verified = true;
        res.status(200).json({ success: true, message: "Admin verified" });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("Error during admin verification:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }

  async logOut(req: Request, res: Response): Promise<void> {
    try {
      req.session.destroy((err) => {
        if (err) {
          console.error("Error during logout:", err);
          res.status(500).json({ success: false, message: "Logout failed" });
          return;
        }
        res.status(200).json({ success: true, message: "Logout successful" });
      });
    } catch (error) {
      console.error("Error during logout:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  }
}
