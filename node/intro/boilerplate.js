const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// fs.mkdir('dogs', {recursive: true}, (err) => {
//     console.log('in the callback')
//     if (err) throw err;
// })
// console.log('i come after mkdir')
// console.log(fs)

fs.mkdirSync(folderName);
fs.writeFileSync(`${folderName}/index.html`,'test');
fs.writeFileSync(`${folderName}/app.js`,'');
fs.writeFileSync(`${folderName}/styles.css`,'');


