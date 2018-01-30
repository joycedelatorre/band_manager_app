import axios from "axios";
export default{
	getBand: function(name){
		return axios.get("/api/spotify/band/" + name);
	}
};


