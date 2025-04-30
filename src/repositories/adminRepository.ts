import { IAdminRepository } from "../repositories/iadminRepository";
import { Iadmin } from "../interfaces/iadmin.interface";

export class AdminRepository implements IAdminRepository {
  private readonly admin: Iadmin = {
    userName: "Admin",
    password: "admin1234",
  };

  async verifyAdmin(admin: Iadmin): Promise<Iadmin | null> {
    return admin.userName === this.admin.userName && admin.password === this.admin.password
      ? this.admin
      : null;
  }
}
