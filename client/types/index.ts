export interface IVariables {
  wStatusWord1: number;
  wControlWord1: number;
  iAccessLevel: number;
  iServoOverride: number;
  a_BStatusPneumatics: [];
}

export const defaultValues: IVariables = {
  wStatusWord1: 0,
  wControlWord1: 0,
  iAccessLevel: 0,
  iServoOverride: 0,
  a_BStatusPneumatics: [],
};
