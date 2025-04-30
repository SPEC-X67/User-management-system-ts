import { Iadmin } from "../interfaces/iadmin.interface";

export interface IAdminRepository {
  verifyAdmin(admin: Iadmin): Promise<Iadmin | null>;
}
