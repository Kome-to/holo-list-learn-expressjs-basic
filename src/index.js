const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;

db.connect();

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP Logger
// app.use(morgan('combined'));

//Template Engine
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
app.use(express.static(path.join(__dirname, 'public')));

// db.connect();
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
