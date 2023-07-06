import {RoleType} from "./Enum/RoleType";
import {User} from "./User";

export class Role{
  id!: number;
  type!:RoleType;
  users:User[]=[];
}
