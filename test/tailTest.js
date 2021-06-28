const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(JSON.stringify(result), JSON.stringify(['Lighthouse', 'Labs']));

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
