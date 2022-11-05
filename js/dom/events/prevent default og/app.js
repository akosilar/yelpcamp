const tweetForm = document.querySelector('#tweetForm');
const tweets = document.querySelector('#tweets');
tweetForm.addEventListener('submit', function(e) {
    const usernameInput = document.querySelectorAll('input')[0];
    const tweetInput = document.querySelectorAll('input')[1];
    addTweet(usernameInput,tweetInput)
    
    e.preventDefault();
})

const addTweet = (usernameInput,tweetInput) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(usernameInput.value);
    newTweet.append(bTag);
    newTweet.append(`- ${tweetInput.value}`);
    tweets.append(newTweet);
    console.log(`${usernameInput.value}`);
    console.log(`${tweetInput.value}`);
    usernameInput.value='';
    tweetInput.value='';
    usernameInput.focus();

}