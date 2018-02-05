
console.log("server.js");
const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const axios = require("axios");
//------------<Joyce start>--------------------
const path = require("path");
const Spotify = require('node-spotify-api');
// const axios = require('axios');
//-------------<Joyce end>--------------------
const Twitter = require('twitter');


// connect to the database and load models
const mongooseConfig = require('./config/mongoose.json');
require('./models/mongoose').connect(process.env.MONGODB_URI || 
	"mongodb://localhost/bandman");

const app = express();

// Tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
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

//----------------------<Joyce start>---------------------------
const anonymousStrategy = require('passport-anonymous').Strategy;
passport.use(new anonymousStrategy);
//-----------------------<Joyce end>---------------------------

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');

//---------------------<Joyce Start Spotify call>-----------------------
app.get("/api/spotify/band/:name",function(req, res){
	console.log("-->" + req.params.name + "<--");
// app.get("/api/spotify/band/:name", passport.authenticate(['anonymous'], {session:false}),function(req, res){ //<-- this is a test
	var band = req.params.name;
	var spotify = new Spotify({
	  id: '0339cff6d283429aabd4d3ee0802b8f8',
	  secret: '8d843d5a4f1b46789aeef92ccd0e001b'
	});

	spotify.search({ type: 'artist', query: band }, function(err, data) {
	  if (err) {
	    //return console.log('Error occurred: ' + err);
	  }
	 	//for(var i = 0; i < data.tracks.items.length; i++){
	 		console.log(JSON.stringify(data));
	 		res.json(data);

	 		// the console is for testing in node server.js 
	 		// console.log("Name: "+JSON.stringify(data.artists.items[0].name));
	 		// console.log("Genre: "+JSON.stringify(data.artists.items[0].genres[0]));
	 		// console.log("Popularity: "+JSON.stringify(data.artists.items[0].popularity));
	 		// console.log("Followers: "+JSON.stringify(data.artists.items[0].followers.total));
	 		// console.log("Images: "+JSON.stringify(data.artists.items[0].images[0].url));
	});
	// res.send(spotifyThisBand(name));
});


app.get("/api/reverbnation/:pnum", function(req, res) {
	var pnum = req.params.pnum;
	console.log(pnum);
	console.log("hector");
	var url = "https://www.reverbnation.com/api/campaign/search";
	axios.post(url,{"tier":"1","page":pnum,"per_page":10,"status":["Running","Offer"],"open_for_submissions":true,"online":true,"extra_fields":"user_submissions,crowd_review_opp,can_submit"
		}).then(function(response){
			console.log("hello world");
			console.log(response.data);
			res.json(response.data);
		});
});

//---------------------------<Joyce end>---------------------------
app.get("/api/listener/band/:name", function(req, res){
	console.log("-->" + req.params.name);
	axios.get("http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + req.params.name + "&api_key=257b3ccab678d3242a9df1d72c677454&format=json").then(function(data){
		console.log(data.data.artist.stats);
		res.json(data.data.artist);
	});
});
// -------------------------<Twitter>-------------------------------
app.get("/api/twitter/band/:name", function(req,res){
	console.log("------->" + req.params.name);

	var client = new Twitter({
  		consumer_key:'Ay0w8bJBkdWgTjy7mtXvbPzT8',
  		consumer_secret:'mKegADFO1DxM1Fsalw4NQOBZZhWJelPLLrYdLQMczZTTNSYyjy',
  		access_token_key:'940763629342941185-4RbW7RG3y8J6PslQBu2n4OnzpuqYOnm',
  		access_token_secret:'Ka7XzeIXgblWld1B9Kmqp7LZLrokqeBzp7uj7ci7J8r4b'
	});
	var band = req.params.name;

	// 	client.stream('statuses/filter', {track: band},  function(stream) {
	//   	stream.on('data', function(tweet) {
	//     	console.log(tweet.text);
	//     	res.json(tweet);
	//  	 });

	//   	stream.on('error', function(error) {
	//     	console.log(error);
	//   	});
	// });

	client.get('search/tweets', {q: band}, function(error, tweets, response) {
   console.log(tweets.text);
});
});



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