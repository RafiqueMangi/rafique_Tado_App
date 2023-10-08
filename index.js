import inquirer from "inquirer";
let todos = ["rafique", "Ahmed"];
async function createTodo(arr) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["add", "update", "view", "delete"]
        });
        if (ans.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add Names...",
                name: "items",
            });
            arr.push(addTodo.items);
            console.log(todos);
        }
        if (ans.select == "update") {
            let update = await inquirer.prompt({
                type: "list",
                message: "select names for update",
                name: "items",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "add Names...",
                name: "items",
            });
            let newTodos = todos.filter(val => val !== update.items);
            todos = [...newTodos, addTodo.items];
            console.log(todos);
        }
        if (ans.select == "view") {
            console.log(todos);
        }
        if (ans.select == "delete") {
            let deleteNames = await inquirer.prompt({
                type: "list",
                message: "select names for delete",
                name: "items",
                choices: todos.map(item => item)
            });
            let newTodos = todos.filter(val => val !== deleteNames.items);
            todos = [...newTodos];
            console.log(todos);
        }
    } while (true);
}
createTodo(todos);
