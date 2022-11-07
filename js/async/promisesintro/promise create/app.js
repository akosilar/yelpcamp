const fakeRequest = (url) => {
   return new Promise((resolve,reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if(rand < 0.7) {
                resolve('your fake data here',url);

            }
            reject('request error')
        },1000)
    })
}

// fakeRequest('/bats/1')
//     .then((data) => {
//         console.log('done with request!',data)
//     })
//     .catch((err) => {
//         console.log('oh noes',err)
//     })


async function makeTwoRequests() {
   let data1 = await fakeRequest('/page1');
   console.log(data1);
}

makeTwoRequests();