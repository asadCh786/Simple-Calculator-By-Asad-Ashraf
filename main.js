import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter second number", type: "number", name: "secondnumber" },
    {
        message: "select one of the operators to perform operations",
        type: "list",
        name: "operators",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//conditional statement
if (answer.operators === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operators === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operators === "Multiplicatoin") {
    console.log(answer.operators * answer.secondnumber);
}
else if (answer.operators === "Division") {
    console.log(answer.operators.firstnumber / answer.secondnumber);
}
else {
    console.log("Please select valid operator");
}
;
