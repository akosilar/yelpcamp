const subreddits = ['cringe','books','chickens','funny','pics','soccer'];

for (let i= 0; i<subreddits.length;i++) {
    console.log(`visit reddit.com/r/${subreddits[i]}`);
}

for (let sub of subreddits) {
    console.log(sub);
}


const seatingChart = [
    ['kristen','erika','namita'],
    ['geoffrey','juanita','anotonio','kevin'],
    ['yuma','sakura','jack','erika']
];

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}

for (let char of "the quick brown") {
    console.log(char);
}

const testScores = {
    keenan: 80,
    damon: 68,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77
}

for (let student in testScores) {
    console.log(`${student}:${testScores[student]}`);
}
let total = 0;
for (let score of Object.values(testScores)){
    total += score;
}

let average = total/Object.values(testScores).length
console.log (`average is ${average}`);

console.log(Object.keys(testScores));
console.log(Object.values(testScores));
console.log(Object.entries(testScores));
