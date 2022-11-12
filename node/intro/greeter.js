//on a terminal, run node greeter.js sars blars

const args = process.argv.slice(2);
for (let arg of args){
    console.log(`Hi there, ${arg}`)
}

