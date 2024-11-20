import inquirer from 'inquirer';
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            message: "What you want to add in your Todos?",
            type: "input",
        },
        {
            name: "addMore",
            message: "Do You want to add more?",
            type: "confirm",
            default: false,
        },
    ]);
    // Input validation for empty tasks
    if (!addTask.todo.trim()) {
        console.log(`Please enter a valid task.`);
        continue;
    }
    todos.push(addTask.todo);
    condition = addTask.addMore;
}
// Final Todo list after all tasks have been added
console.log(`Your final Todo list:`);
todos.forEach((task, index) => {
    console.log(`Task ${index + 1}, ${task}`);
});
