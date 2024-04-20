import inquirer from "inquirer"; 

let mybalance = 10000; //Dollar
let  mypin = 2233;
let pinAnswer = await inquirer.prompt([{
    name: "pin",
    message: "enter your pin",
    type: "number"
}]);
if (pinAnswer.pin === mypin){
    console.log("correct pin!!!...");
    
}