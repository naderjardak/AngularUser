import {Role} from "./Role";
export class User {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  tokenExpired!: boolean;
  phoneNumber!: string;
  role!: Role;
}
