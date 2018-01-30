import React, { Component } from "react";
import API from "../../utils/API";
import Spotify from "./Spotify.js";

class User extends Component{

	render(){
		return(
			<div className="User">
			 	<Spotify username="backstreet boys"></Spotify>
			</div>
		)
	}

}

export default User;