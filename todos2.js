let input = prompt('what would you like to do?')
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('******************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}:${todos[i]} `);
        }
        console.log('******************')
    } else if (input === 'new') {
        const newtodo = prompt('ok, what is the new todo?')
        todos.push(newtodo);
        console.log(`${newtodo} has been added to the list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Ok, enter an index number to delete:'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')