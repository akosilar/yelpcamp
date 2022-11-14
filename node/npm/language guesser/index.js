import {franc, francAll} from 'franc';
import { createRequire} from "module";

const require = createRequire(import.meta.url);
const langs = require('langs');

// franc('Alle menslike wesens word vry');
const args = process.argv.slice(2);

// console.log(args)
let translate = franc(args[0]);
if(translate === 'und') {
    console.log('wtf is that lang?')
}
else{
    console.log(langs.where("3",translate).name);
}
// console.log(langs.where("3",translate));

// console.log(franc('Alle menslike wesens word vry'))