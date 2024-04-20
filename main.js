"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var mybalance = 10000; //Dollar
var mypin = 2233;
var pinAnswer = await inquirer_1.default.prompt([{
        name: "pin",
        message: "enter your pin",
        type: "number"
    }]);
if (pinAnswer.pin === mypin) {
    console.log("correct pin!!!...");
}
