
try {
    hello.toUpperCase();
} catch {
    console.log('rip you error');
}

function yell (msg) {
    try {
    console.log(msg.toUpperCase().repeat(4)); 
        
    } catch (e) {
        console.log(e);
        console.log('please pass a string');
    }
}

