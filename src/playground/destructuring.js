console.log('object destructuring');

// const person = {
//     name: 'Nichol',
//     age: 30,
//     location: {
//         city: 'Hanoi',
//         temp: 15
//     }
// };

// // ES6 destructuring
// // const name = person.name;
// // const age = person.age;
// const { name = 'Anonymous', age } = person;
// const { city, temp: temperature = 25 } = person.location;

// console.log(`${name} is ${age}`);

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

const book = {
    title: 'Harry Potter',
    author: 'J.K.Rowling',
    publisher: {
        name: 'I love ya'
    }
};

const { title, author } = book;
const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(`I love ${title} written by ${author} published by ${publisherName}`);

// =======================

console.log('array destructuring');
const address = ['address 1', 'address 2', 'address 3', '12312'];

const [, city, , zip = '100000'] = address;

console.log(`You are in ${city} ${zip}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];

const [coffeeName,,mediumPrice,] = item;
console.log(`A medium ${coffeeName} costs ${mediumPrice}`);