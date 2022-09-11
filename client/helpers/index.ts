import { IVariables, IUser, Role } from "../types";

export const defaultVariables: IVariables = {
  wStatusWord1: 0,
  wControlWord1: 0,
  iAccessLevel: 0,
  iServoOverride: 0,
  a_BStatusPneumatics: [],
};

export const defaultUser: IUser = {
  id: 0,
  name: "Niezalogowany",
  surname: "Operator",
  login: "operator",
  password: "operator",
  level: Role.Operator,
};
