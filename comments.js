// create web server with express
const express = require('express');
const app = express();
// create a port
const port = 3000;
// create a path
const path = require('path');
// create a body parser
const bodyParser = require('body-parser');
// create a mongoose
const mongoose = require('mongoose');
// create a method override
const methodOverride = require('method-override');
// create a moment
const moment = require('moment');
// create a express session
const session = require('express-session');
// create a flash
const flash = require('connect-flash');
// create a passport
const passport = require('passport');
// create a local strategy
const LocalStrategy = require('passport-local');
// create a passport local mongoose
const passportLocalMongoose = require('passport-local-mongoose');
// create a user model
const User = require('./models/user');
// create a campground model
const Campground = require('./models/campground');
// create a comment model
const Comment = require('./models/comment');
// create a seedDB
const seedDB = require('./seeds');

