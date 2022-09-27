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

export interface IMessage {
  id: number;
  text: string;
  type: MessageType;
}

export interface IRecipe {
  id: number;
  name: string;
  value1: number;
  value2: number;
  value3: string;
}

export enum Role {
  Operator = "Operator",
  Mainteance = "Mainteance",
  Engineer = "Engineer",
  Admin = "Admin",
  Service = "Service",
}

export enum MessageType {
  Info = "Informacja",
  Warning = "Ostrzeżenie",
  AlarmMid = "Alarm Mid",
  AlarmCritical = "Alarm Krytyczny",
}

export enum ScreenName {
  HomeScreen = "Ekran Główny",
  Settings = "Ustawienia",
  Statistics = "Statystyki",
  Messages = "Wiadomości",
  Recipes = "Receptury",
}
