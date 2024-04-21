#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 0-10 :",
    }
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congradulations ! your guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
