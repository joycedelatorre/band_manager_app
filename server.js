const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");

// connect to the database and load models
const mongooseConfig = require('./config/mongoose.json');
require('./models/mongoose').connect(mongooseConfig.dbUri);

const app = express();

// Tell the app to look for static files in these directories
// app.use(express.static('./server/static/'));
// app.use(express.static('./client/dist/'));

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// Routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/html.js');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use(htmlRoutes);

// Set Port, hosting services will look for process.env.PORT
app.set('port', (process.env.PORT || 3001))

// Start the server
app.listen(app.get('port'), () => {
  console.log(`🌎 ==> Server now port ${app.get('port')}`);
});