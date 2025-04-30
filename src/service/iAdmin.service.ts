import { Iadmin } from "../interfaces/iadmin.interface";

export interface IAdminService {
  verifyAdmin(
    userName: string,
    password: string
  ): Promise<{ verified: boolean; admin?: Iadmin }>;
}
