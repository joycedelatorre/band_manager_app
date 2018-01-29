const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const passport = require("passport");
const session = require("express-session");
const passportConfig = require("./config/passport.js")(passport);

const mongoose = require("mongoose");
const db = require("./models/sequelize.js");

const app = express();
const PORT = process.env.PORT || 3001;
// const path = require("path");


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// -- trying to figure out proxy issue . . .
// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("../client/src/pages/_Vince_Http_Public"));
// Add routes, both API and view
app.use(routes);
// -----------


mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bandmanager",
  {
    // useMongoClient: true
    // above parameter is deprecated
  }
);

// killed the `force: true` option 
db.sequelize.sync({});
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });


// app.use(session(
// 	{
// 		secret: "goatjsformakingbettersecurity"
// 	}
// ));

// added some options to the session function call . . .
// WARNING: express-session deprecated pass resave option; default value will change
// WARNING: express-session deprecated pass saveUninitialized option; default value will change
// those two need to be explicitly defined
// the `name` option I just set to see how it will show up in the browser
// (and whether passport will break or not... want to understand how it works)
// Vincent's original app.use(session(...)) is above these comments.

app.use(session(
	{
		secret: "goatjsformakingbettersecurity",
	    name: "session_key",
	    // store: sessionStore, // connect-mongo session store
	    // proxy: true,
	    resave: true,
	    saveUninitialized: true
	}
));

app.use(passport.initialize());
app.use(passport.session());

// require("./routes/htmlRoutes.js")(passport, app);
// require("./routes/api-routes.js")(app);

app.listen(PORT,function(){
	console.log(`🌎 ==> Server now port ${PORT}`);
});