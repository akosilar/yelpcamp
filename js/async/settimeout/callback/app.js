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


const delayedColorchange = (newColor, delay, doNext) => {
    setTimeout(()=> {
        document.body.style.backgroundColor = newColor
        doNext && doNext();
    },delay)

}

delayedColorchange('red',1000, ()=>{
    delayedColorchange('orange', 1000, () => {
        delayedColorchange('yellow', 1000)
    })
});
