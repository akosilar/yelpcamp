const req = new XMLHttpRequest();
let name = 'empty'
req.onload = function () {
    console.log('it loaded');
    // console.log(this.responseText);
    const data = JSON.parse(this.responseText);
    console.log(data.name, data.height);
    name = data.name
}


req.onerror = function () {
    console.log('error!!');
    console.log(this);
}

req.open("GET", "https://swapi.dev/api/people/1/");
req.send();

setTimeout(() => {
	const h1 = document.createElement('h1');
	h1.innerText = name;
	document.body.append(h1)
	
	"http https://swapi.dev/api/people/1/"
}, 5000);

