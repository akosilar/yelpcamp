
let cmd = prompt('What would you like to do?');
console.log(cmd);

let todo = [];

while(cmd !== 'quit') {
    if(cmd == 'new') {
        let add = prompt('Enter new todo');
        todo.push(add);
        console.log(`${add} added to list`);
        cmd = prompt('What would you like to do?');
    }
    else if (cmd == 'list') {
        if(todo.length == 0) {
            console.log(`list is empty`);
            cmd = prompt('What would you like to do?');

        }
        else {
            console.log('*****');
            for (let i=0;i<todo.length;i++) {
                console.log(`${i}: ${todo[i]}`);
            }
            console.log('*****');
            cmd = prompt('What would you like to do?');
        }
        
    }
    else if (cmd == 'delete') {
        let del = prompt('enter index of todo to delete');
        if (del<todo.length){
            console.log(`${todo[del]} removed`);
            todo.splice(del,1);
             cmd = prompt('What would you like to do?');

        }
        else {
            console.log('invalid index');
            cmd = prompt('What would you like to do?');
        }
    }
    else {
        console.log('invalid command');
        cmd = prompt('What would you like to do?');
    }
}

console.log('you quit the app');