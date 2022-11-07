// async function hello() {

// }

// const sing = async () => {
//     // throw new Error('uh oh problem')
//     return 'la la la'
// }

// sing()
// .then((data) => {
//     console.log('promise resolved with', data)
// })
// .catch(err => {
//     console.log('oh noe promise rej',err)
// })

const login = async (username,password) => {
    if (!username || !password) throw 'Missing Credentials' 
    if (password === 'corgifeetarecute') return 'welcome!'
    throw 'invalid password'
    
}

login('lars20000','corgifeetarecute')
.then(msg => {
    console.log('logged in', msg)
})
.catch(err => {
    console.log('invalid', err)
})