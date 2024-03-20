import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first num", type: "number", name: "firstnumber" },
    { message: "Enter your second num", type: "number", name: "secondnumber" },
    {
        name: "operator",
        type: "list",
        message: "Enter your operator",
        choices: ["Add", "Sub", "Mul", "Div"],
    },
]);
if (answer.operator === "Add") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Sub") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Mul") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "Div") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Invalid number");
}
