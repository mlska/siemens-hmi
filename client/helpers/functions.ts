import { IMessage } from "../types";

//funkcja sprawdzająca czy w zmiennej dany bit jest stanem wysokim
export const isBitSet = (variable: any, index: number) => {
  const binary = variable.toString(2).split("").reverse().join("");
  return Number(binary[index]);
};

//funkcja generująca tablicę alarmów na podstawie worda i tablicy typu IMessage
export const wordToAlarms = (
  word: number,
  alarms: Array<IMessage>
): Array<IMessage> => {
  let arrOfAlarms: Array<IMessage> = [];
  const arrOfBits = word.toString(2).split("").reverse();
  arrOfBits.forEach((bit, index) => {
    Number(bit) && arrOfAlarms.push(alarms[index]);
  });
  return arrOfAlarms;
};
