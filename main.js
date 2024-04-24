#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 50000.; //Dollar
let myPin = 2425;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number"
    }
]);
// 2425 === 24256 - false
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!");
    let operationsAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationsAns);
    if (operationsAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // =; -=,+=
        myBalance -= amountAns.amount;
        console.log("your remaing balance is:" + myBalance);
    }
    else if (operationsAns.operation === "check balance") {
        console.log("your balance is :" + myBalance);
    }
}
else {
    console.log("Incorrect pin number");
}
