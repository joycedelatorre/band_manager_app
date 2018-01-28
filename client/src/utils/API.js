// import axios from "axios";
// const Spotify = require ('node-spotify-api');

// export default{
// 	getBand: function(){
// 		let band = new Spotify({
// 			id: '0339cff6d283429aabd4d3ee0802b8f8',
// 			secret: '8d843d5a4f1b46789aeef92ccd0e001b'
// 		});

// 		band.search({ type: 'track', query: band }, function(err, data){
// 			return data;
// 		// 	if(err){
// 		// 		return console.log('Error occured: ' + err);
// 		// 	}
// 		// 	console.log("Artist: "+JSON.stringify(data.tracks.items[0].album.artists[0].name));
// 		// 		// console.log("Song: ")
// 		// 		// console.log("URL: "+JSON.stringify(data.tracks.items[i].album.external_urls.spotify));
// 		// 	console.log("Popularity: " + JSON.stringify(data.tracks.items[0].popularity));
// 		// 	console.log("Available Markets: " + JSON.stringify(data.tracks.items[0].available_markets));
// 		// 	// console.log("Album: "+JSON.stringify(data.tracks.items[i].album.name)); 
// 		// 	console.log("Preview Url: " + JSON.stringify(data.tracks.items[0].preview_url));
// 		// 	console.log("<<--------------------->>");
// 		// });
// 		});
// 	}
// };


import axios from "axios";
export default{
	getBand: function(name){
		return axios.get("/api/spotify/band/" + name);
	}
};


