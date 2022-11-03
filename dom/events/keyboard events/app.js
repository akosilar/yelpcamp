document.querySelector('button').addEventListener('click', function (evt) {
    console.log(evt)
});
let keylogger = [];
const input = document.querySelector('input');
input.addEventListener('keydown', function (e) {
    keylogger.push(e.key);
    console.log(e.key);
})

window.addEventListener('keydown', function(e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP');
            break;
        case 'ArrowDown':
            console.log('DOWN');
            break;
        case 'ArrowLeft':
            console.log('LEFT');
            break;
        case 'ArrowRight':
            console.log('RIGHT');
            break;
        default:
            console.log('ignored');
    }
})

// input.addEventListener('keyup', function () {
//     console.log('keyup');
// })