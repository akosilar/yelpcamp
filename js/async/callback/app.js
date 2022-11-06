// setTimeout(() => {
// document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                     setTimeout(() => {
//                         document.body.style.backgroundColor = 'indigo';
//                         setTimeout(() => {
//                             document.body.style.backgroundColor = 'violet';
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);


// const delayedColorchange = (newColor, delay, doNext) => {
//     setTimeout(()=> {
//         document.body.style.backgroundColor = newColor
//         doNext && doNext();
//     },delay)

// }


const delayedColorchange = (color,delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

delayedColorchange('red',1000)
    .then(() => {
        return delayedColorchange('orange',1000)
    })
    .then(() => {
       return delayedColorchange('yellow', 1000)
    })
    .then(() => delayedColorchange('green', 1000))
    .then(() => delayedColorchange('blue', 1000))
    .then(() => delayedColorchange('indigo', 1000))
    .then(() => delayedColorchange('violet', 1000))





// delayedColorchange('red',1000, ()=>{
//     delayedColorchange('orange', 1000, () => {
//         delayedColorchange('yellow', 1000)
//     })
// });
