# Project
I learnt this project from Udemy.   
The course name is: The Complete React Web Developer Course (with Redux) - Author: Andrew Mead.  
Thanks to him, this course is super good for someone beginning to learn React & Redux.  
It helps me to understand about React & Redux clearly.  

# What I learnt
Some basic knowledge about:  
React  
Redux  
React Router  
Sass  
Jest & Enzyme  
Git  
Heroku  
Firebase  

# Git commands

git init - Create a new git repo  
git status - View the changes to your project code  
git add - Add files to staging area  
git commit - Creates a new commit with files from staging area  
git log - View recent commits  
git push  
git push -u origin master  

# Git SSH

# Heroku commands
heroku --version
heroku login  
heroku create react-redux-expensify-namndh  
git push heroku master  
heroku open  
heroku logs  
heroku config:set key=value  

# yarn scripts
yarn run dev-server  
yarn run build:prod  
yarn run build:dev  
yarn test -- --watchAll  
yarn run start  
yarn install  
yarn install --production  

# Firebase
const database = firebase.database();  
database.ref().on('value', (snapshot) => {
}, (e) => {
});  
database.ref.off('value', onValueChange);  
database.ref('isSingle').remove();
database.ref().update({});  
database.ref('notes').push({});  
database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});  
database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});   
database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});  

# Sass


# installation

