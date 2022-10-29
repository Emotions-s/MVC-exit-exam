const express = require('express');
const path = require('path');
const expressLayout = require('express-ejs-layouts');
const router = require('./routes/router');

const app = express();
// port
const PORT = 3030;

app.use(express.urlencoded({ extended: true }));

// static files
app.use(express.static(path.join(__dirname, 'public/')));
app.use(expressLayout); // ejslayout
app.use(router); // use router

app.set('view engine', 'ejs'); // ejs

// check port
app.listen(PORT, () => {
    console.log(`App in running on Port ${PORT}`);
})