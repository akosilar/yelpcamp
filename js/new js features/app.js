
//default parameters
function rollDie(numSides = 6) {
    // if(numSides === undefined){
    //     numSides = 6;
    // }
    return Math.floor(Math.random()*numSides) + 1;
}

function greet( person = 'Stranger', msg = 'Hola') {
    console.log(`${msg}, ${person}!`)
}

//spread
const nums =  [5,6,1,3,7,8,20,10,50,40,1000,500];
console.log(Math.max(...nums));

const cats = ['booger', 'tuffy'];
const dogs = ['maymay', 'gon'];

const pets = [...cats, ...dogs];

const feline = {
    legs: 4,
    family: 'felidae'
};

const canine = {
    isFurry: true,
    family: 'caninae'
};

const dataFromForm = {
    email: 'janlars@gmail.com',
    password: '234pass',
    username: 'blar1500'
}

const newUser = {...dataFromForm, id:2345, isAdmin: true};

//rest
function sum(...nums) {
    console.log(nums);
    return nums.reduce((total,el) => total + el)
  
}
function raceResults(gold,silver,...everyoneElse) {
    console.log(`gold medal goes to ${gold}`);
    console.log(`silver goes to ${silver}`);
    console.log(`and thanks to everyone else: ${everyoneElse}`);
}

const scores = [929321, 899341, 888336, 772739, 753671, 243567, 111934];

const [gold,silver] = scores;

//destructuring objects
const user1 = {
    
    email: 'janjan@gmail.com',
    password: '1234',
    firstName: 'jan',
    lastName: 'austero',
    born: 1930,
    died: 1978,
    bio: 'my name is emilia',
    city: 'Sf',
    statem: 'california'
}

const user2 = {
    
    email: 'janjan@gmail.com',
    password: '1234',
    firstName: 'jan',
    lastName: 'austero',
    born: 1930,
    bio: 'my name is emilia',
    city: 'Sf',
    statem: 'california'
}


const {email, died = 'N/A'} = user1;

const {born: birthYear} = user2;

//destructuring params
function fullName({firstName,lastName}) {
    return `${firstName} ${lastName}`;
}
// function fullName(user) {
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`;
// }
