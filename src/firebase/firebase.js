import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });

//         console.log(expenses);
//     }, (e) => {
//         console.log('fetch data error', e)
//     });

// database.ref('expenses').push({
//     description: 'Buy drink',
//     note: 'too thirsty',
//     amount: 25,
//     createAt: 125000
// });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'in debt',
//     amount: 100,
//     createAt: 200000
// });

// database.ref('expenses').push({
//     description: 'Relax',
//     note: 'Infinity war',
//     amount: 75,
//     createAt: 50000
// });

// database.ref('notes/-L-SRPq2-aKCs19nt86H').remove();

// database.ref('notes').set(notes);

// database.ref('location')
//      .once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('fetch data fail', e)
// });

// const onValueChange =  database.ref()
//     .on('value', (snapshot) => {
//         console.log(snapshot.val());
//     }, (e) => {
//         console.log('error', e);
//     });

// setTimeout(() => {
//     database.ref().update({
//         'location/city': 'Hanoi'
//     });
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// database.ref().set({
//     name: 'Nichol Nguyen',
//     age: 30,
//     isSingle: false,
//     location: {
//         city: 'Hanoi',
//         country: 'Vietnam'
//     }
// }).then(() => {
//     console.log('data saved');
// }).catch((e) => {
//     console.log('error msg:', e);
// });

// database.ref('age').set(41);
// database.ref('location/city').set('HCM');

// database.ref('attributes').set({
//     height: 165,
//     weight: 62
// });

// database.ref('isSingle').remove().then(() => {
//     console.log('removed');
// }).catch((e) =>{
//     console.log('error remove')
// });

// database.ref().update({
//     name: 'test',
//     age: 33,
//     sex: 'male',
//     'location/city': 'New York'
// });