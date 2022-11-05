const scoreOne = document.querySelector('#score1');
const scoreTwo = document.querySelector('#score2');

const reset = document.querySelector('#reset');
const button1 = document.querySelector('#increase1');
const button2 = document.querySelector('#increase2');

const limit = document.querySelector('#scoreLimit');

button1.addEventListener('click', function(){
    let score = parseInt(scoreOne.innerText);
    score ++;
    scoreOne.innerText = score;
    console.log(scoreOne);
    console.log(limit.value);
    if(score === parseInt(limit.value)) {
        button1.setAttribute('disabled', true);
        button2.setAttribute('disabled', true);

    }
})

button2.addEventListener('click', function(){
    let score = parseInt(scoreTwo.innerText);
    score ++;
    scoreTwo.innerText = score;
    console.log(scoreTwo);
    console.log(limit.value);
    if(score === parseInt(limit.value)) {
        button1.setAttribute('disabled', true);

        button2.setAttribute('disabled', true);
    }
})

reset.addEventListener('click',function() {
    console.log('reset');
    scoreOne.innerText = '0';
    scoreTwo.innerText = '0';
    button1.removeAttribute('disabled');
    button2.removeAttribute('disabled');

})