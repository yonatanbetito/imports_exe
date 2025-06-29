import readlineSync from "readline-sync";
import { Player } from "./classes/Player.js";
import { Riddle } from "./classes/Riddle.js"; // שכחת לייבא
import r1 from "./Riddles/r1.js";


const name = readlineSync.question("enter your name: ");
const player = new Player(name);
const startTime = Date.now();
const riddle = new Riddle(r1)
riddle.ask()
const endTime = Date.now();
player.recordTime(startTime,endTime);
console.log(`Great job ${player.name} you end the game!`);
const stats = player.showStats();
console.log(`Great job ${player.name}, you finished the game!`);
console.log(`Total time: ${stats.totalll}`);
console.log(`Average per riddle: ${stats.averageee}`);








// for (const riddleObj of riddlesData) {
//   const riddle = new Riddle(riddleObj);
//   riddle.ask();