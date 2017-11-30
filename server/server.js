const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 3000;

// register middleware
// use public folder to render
app.use(express.static(publicPath));

// setup all path return back to index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// register port of app
app.listen(port, () => {
    console.log('Server is up');
});