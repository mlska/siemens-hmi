import { IMessage, MessageType } from "../types";

export const alarmWord1: Array<IMessage> = [
  {
    id: 1000,
    text: "Błąd krańcówki 1",
    type: MessageType.AlarmCritical,
  },
  {
    id: 1001,
    text: "Błąd krańcówki 2",
    type: MessageType.AlarmCritical,
  },
  {
    id: 1002,
    text: "Błąd krańcówki 3",
    type: MessageType.AlarmCritical,
  },
  {
    id: 1003,
    text: "Błąd krańcówki 4",
    type: MessageType.AlarmCritical,
  },
];

export const warningWord1: Array<IMessage> = [
  {
    id: 1000,
    text: "Mało węgla",
    type: MessageType.Warning,
  },
  {
    id: 1001,
    text: "Mało koksu",
    type: MessageType.Warning,
  },
  {
    id: 1002,
    text: "Mało miału",
    type: MessageType.Warning,
  },
  {
    id: 1003,
    text: "Mało opon",
    type: MessageType.Warning,
  },
];
