const p1 = {
    button: document.querySelector('#increase1'),
    display: document.querySelector('#score1')
}

const p2 = {
    button: document.querySelector('#increase2'),
    display: document.querySelector('#score2')
}

const scoreOne = document.querySelector('#score1');
const scoreTwo = document.querySelector('#score2');

const buttonReset = document.querySelector('#reset');
const button1 = document.querySelector('#increase1');
const button2 = document.querySelector('#increase2');

const limit = document.querySelector('#scoreLimit');

function updateScores(player, opponent) {
    let score = parseInt(player.display.innerText);
    score ++;
    player.display.innerText = score;
    if(score === parseInt(limit.value)){
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
        player.button.setAttribute('disabled', true);
        opponent.button.setAttribute('disabled',true);
    }
}

p1.button.addEventListener('click', function(){
    updateScores(p1,p2);
    // let score = parseInt(scoreOne.innerText);
    // score ++;
    // scoreOne.innerText = score;
    // console.log(scoreOne);
    // console.log(limit.value);
    // if(score === parseInt(limit.value)) {
    //     button1.setAttribute('disabled', true);
    //     button2.setAttribute('disabled', true);
    //     score1.classList.add('has-text-success');
    //     score2.classList.add('has-text-danger');


    // }
})

p2.button.addEventListener('click', function(){
    updateScores(p2,p1);
    // let score = parseInt(scoreTwo.innerText);
    // score ++;
    // scoreTwo.innerText = score;
    // console.log(scoreTwo);
    // console.log(limit.value);
    // if(score === parseInt(limit.value)) {
    //     button1.setAttribute('disabled', true);

    //     button2.setAttribute('disabled', true);
    //     score2.classList.add('has-text-success');
    //     score1.classList.add('has-text-danger');
    // }
})

buttonReset.addEventListener('click',reset);

limit.addEventListener('change', reset);

function reset() {
    for (let p of [p1,p2]){
        p.display.innerText = '0';
        p.button.removeAttribute('disabled');
        p.display.classList.remove('has-text-success','has-text-danger');
    }
    // p1.display.innerText = '0';
    // p2.display.innerText = '0';
    // p1.button.removeAttribute('disabled');
    // p2.button.removeAttribute('disabled');
    // p1.display.classList.remove('has-text-success','has-text-danger');
    // p2.display.classList.remove('has-text-success','has-text-danger');

}

