#! /usr/bin/env node
import inquirer from 'inquirer';
// 1) computer will generato a number
// 2) user input for guessing number
// 3)  compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "plese guess a number between 1-6:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation ! you guess a right number.");
}
else {
    console.log("you guessed  wrong number.");
}
console.log(answer);
