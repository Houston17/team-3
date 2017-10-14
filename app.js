// Modules
const dotenv = require('dotenv').config();
const express = require('express');
const validator = require('express-validator');
const session = require('express-session');
const flash = require('express-flash');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const passport = require('passport');
const mongo = require('mongoose');
const MongoStore = require('connect-mongo')(session);


// Routes
const staticController = require('./controller/static');

// Express Server
const app = express();

// View Engine
const hbs = exphbs.create({
  defaultLayout: 'layouts.hbs',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// Routes for CSS, JS etc.
app.use(express.static(path.join(__dirname, '/public'), { redirect: false }));


//MongoDB connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});
console.log(mongoose.connection.readyState);

// Express Config
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(validator());
app.use(flash());

// Static Pages
app.get('/', staticController.getHome);

// Local Machine Testing and HTTP
http.createServer(app).listen(process.env.PORT || 8000);
console.log('Server listening on 8000');
