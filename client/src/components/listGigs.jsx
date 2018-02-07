import React, { Component } from 'react';
import API from "../utils/API";
import Wrapper from './Wrapper';
import Background from "./Background/image/guitarFire.jpeg";
import Auth from '../utils/Auth';

class ListGig extends Component {
	constructor(props){
		super(props)
		this.state ={
			requestFailed: false,
			pnum:0,
			secretData: '',
      		uid:'',
      		userGigsData:[]
		};
	}
	componentDidMount(){
			const xhr = new XMLHttpRequest();
		    xhr.open('get', '/api/dashboard');
		    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		    // set the authorization HTTP header
		    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
		    xhr.responseType = 'json';
		    xhr.addEventListener('load', () => {
		      if (xhr.status === 200) {
		        
		         console.log(xhr.response.user._id);
		        this.setState({
		          secretData: xhr.response.message,
		          uid: xhr.response.user._id
		        });
		        this.loadlistGigs(this.state.uid);
		      } else{
		      }
		    });
		    xhr.send();
	}

	loadlistGigs =(uid) =>{
		API.listGigs(uid)
			.then(res =>
				this.setState({userGigsData:res.data})
			).catch (err=> console.log(err));
	}
	deleteGig = (e) =>{
		console.log('delete');
		const gigId = e.target.id
		console.log(gigId);
		API.deleteGig(gigId)
		.then().catch(err => console.log(err));
		this.loadlistGigs(this.state.uid);
	}

	render(){
		return(
		<div>
			<div><h3>Events Applied</h3></div>
			{this.state.userGigsData.map(obj => {
					return (
						<div style={{borderBottom: '2px solid grey'}}>
							<h4><span>&#9829;</span> {obj.name}</h4>
							<h4>{obj.headline}</h4>
							<div>
							<button className= "btn btn-success"><a href={obj.submission_url}style={{color:"white"}}>Apply here </a></button>
							<span>&nbsp;&nbsp;&nbsp;</span>
							<button className= "btn btn-danger" id={obj._id}onClick={this.deleteGig}>Delete</button>
							</div>
							<h4>Cost: {obj.submission_cost}</h4>
						</div>
					);
				})
			}
		</div>
		);
	}
}

export default ListGig;