import readLineSync from "readline-sync";
import { LinkedList } from "./linked-list.js";
const list = new LinkedList();

console.log("welcome to the linked list exercice");

const menu = (option) => {
  let value, index, size, result;
  switch (option) {
    case "1":
      value = readLineSync.question("please give value of the new node : ");
      list.append(value);
      break;
    case "2":
      value = readLineSync.question("please give value of the new node : ");
      list.prepend(value);
      break;
    case "3":
      size = list.listSize();
      console.log(`the size of the is of ${size} nodes`);
      break;
    case "4":
      console.log(list.getHead());
      break;
    case "5":
      console.log(list.getTail());
      break;
    case "6":
      index = readLineSync.question("please give the index : ");
      list.at();
      break;
    case "7":
      list.pop();
      break;
    case "8":
      value = readLineSync.question("please give the value : ");
      list.contains(value);
      break;
    case "9":
      value = readLineSync.question(
        "please write the value you want to find : "
      );
      result = list.find(value);
      result == null
        ? console.log("the value don't exist in the list")
        : console.log(`the value was found at the index ${result}`);
      break;
    case "10":
      console.log("representaion of the list");
      console.log(list.toString());
      break;
    case "11":
      value = readLineSync.question("please write the value of the node : ");
      index = readLineSync.question("please write the index : ");
      list.insertAt(value, index);
      break;
    case "12":
      index = readLineSync.question(
        "please write the index of the node you want to remove : "
      );
      list.removeAt(index);
      break;
    case "0":
      console.log("Exit");
      break;
    default:
      console.log("please choose a number from the menu");
      break;
  }
};

let userRes;
console.log("choose one of the following option");
console.log("-1 : insert a new node at the end of the list.");
console.log("-2 : insert a new node at the start of the list.");
console.log("-3 : get the size of the list.");
console.log("-4 : get the head of the list.");
console.log("-5 : get the tail of the list.");
console.log("-6 : get the node at a given index.");
console.log("-7 : remove the last node from the list.");
console.log("-8 : check if the list contains a given value.");
console.log("-9 : find the closest index of a value if it exist in the list.");
console.log("-10 : get a representation of the list.");
console.log("-11 : insert a new node at a given index.");
console.log("-12 : remove at a certain index.");
console.log("-0 : exit ");
while (userRes !== "0") {
  userRes = readLineSync.question("choose an option : ");
  menu(userRes);
}
