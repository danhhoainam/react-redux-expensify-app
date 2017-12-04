const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('something wrong')
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error')
});

console.log('after');