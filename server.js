const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
var Spotify = require('node-spotify-api');
const PORT = process.env.PORT || 3001;
const app = express();

app.get("/api/hello", function(req, res){
	res.send("hi");
});


app.get("/api/spotify/band/:name", function(req, res){
	var band = req.params.name;
	var spotify = new Spotify({
	  id: '0339cff6d283429aabd4d3ee0802b8f8',
	  secret: '8d843d5a4f1b46789aeef92ccd0e001b'
	});

	spotify.search({ type: 'track', query: band }, function(err, data) {
	  if (err) {
	    //return console.log('Error occurred: ' + err);
	  }
	 	//for(var i = 0; i < data.tracks.items.length; i++){
	 		console.log(JSON.stringify(data));
	 		res.json(data);

			//console.log("Artist: "+JSON.stringify(data.tracks.items[0].album.artists[0].name));
			
		 // res.json(JSON.stringify(data.tracks.items[0].album.artists[0].name));
	});
	// res.send(spotifyThisBand(name));
});

// app.get("*",function(req, res){
// 	res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT,function(){
	console.log(`🌎 ==> Server now port ${PORT}`);
});