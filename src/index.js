const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const path = require('path');
const route = require('./routes');
const db = require('./config/db');
const methodOverride = require('method-override');

const app = express();
const port = 8080;

app.use(methodOverride('_method'));

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
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use(express.static(path.join(__dirname, 'public')));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
