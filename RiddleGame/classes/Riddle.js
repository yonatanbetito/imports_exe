const readlineSync = require("readline-sync");
import r1 from "..Riddles/r1.js";

class Riddle {
  constructor(id, name, taskDescription, correctAnswer) {
    this.id = id;
    this.name = name;
    this.taskDescription = taskDescription;
    this.correctAnswer = correctAnswer;
  }
  ask() {
    do {
      const response = question("enter your response: ");
    } while (this.correctAnswer !== response);
    {
      return true;
    }
  }
}
