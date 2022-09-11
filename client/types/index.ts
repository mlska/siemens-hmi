export interface IVariables {
  wStatusWord1: number;
  wControlWord1: number;
  iAccessLevel: number;
  iServoOverride: number;
  a_BStatusPneumatics: [];
}

export interface IUser {
  id: number;
  name: string;
  surname: string;
  login: string;
  password: string;
  level: Role;
}

export enum Role {
  Operator,
  Mainteance,
  Engineer,
  Admin,
  Service,
}
