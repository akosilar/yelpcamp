// axios.get("https://swapi.dev/api/people/1/")
// .then((res) => {
//     console.log('response:',res)
// })
// .catch((e) => {
//     console.log('error',e);
// })

const getStarWarsPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    }
    catch (e) {
        console.log('error',e);
    }
   
}

getStarWarsPeople(5);
getStarWarsPeople(10);


const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');


const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('li');
    newLi.append(jokeText);
    jokes.append(newLi);
}

const getDadJoke = async () => {

    try {
        const config = {
            headers: {
                Accept: 'application/json'
            }
        }
        const res = await axios.get("https://icanhazdadjoke.com/", config)
        console.log(res.data.joke)
        return res.data.joke;
    } catch (e) {
        return 'no jokes available! sry'
    }
    
    
    
}


button.addEventListener('click',addNewJoke)

