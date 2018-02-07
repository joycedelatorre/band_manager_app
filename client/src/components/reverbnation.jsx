import React, { Component } from 'react';
import API from "../utils/API";
import Wrapper from './Wrapper';
import Background from "./Background/image/guitarFire.jpeg";
import Auth from '../utils/Auth';

class Reverbnation extends Component {
	constructor(props) {
		super(props)
		this.state = {
			requestFailed: false,
			//pnum: 0
			pnum: this.props.pnum,
			secretData: '',
			user:''
		};
	}
	componentDidMount() {
		//this.state.pnum = this.props.pnum;
		this.loadGigs(this.props.pnum);

		const xhr = new XMLHttpRequest();
		    xhr.open('get', '/api/dashboard');
		    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		    // set the authorization HTTP header
		    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
		    xhr.responseType = 'json';
		    xhr.addEventListener('load', () => {
		      if (xhr.status === 200) {
		        
		         console.log(xhr.response.user._id);
		          // here's the output . . .
		          // {
		          //   _id: "5a6f9367a79ba51bd4bf79e0",
		          //   username: "matt",
		          //   password: "$2a$10$AYX/BOkOai.DjKq5Fq9VWedjBpzjMX9IpRUAyGcX7pFdeMjspqw8u",
		          //   __v: 0
		          // }
		        //
		        
		        this.setState({
		          secretData: xhr.response.message,
		          user: xhr.response.user
		        });
		      }
		    });
		    xhr.send();
	}

	loadGigs = (pnum) => {
		API.getGigs(pnum)
			.then(res =>
				this.setState({reverbnationData: res.data})
			).catch (err=> console.log(err));
	}

	previousClick = (e) => {
		//alert('previous click');
		e.preventDefault();
		let k = parseInt(this.state.pnum, 0) - 1;
		this.setState({pnum: k});
		this.loadGigs(k);
	}

	nextClick =(e) => {
		e.preventDefault();
		let k = parseInt(this.state.pnum, 0) + 1;
		this.setState({pnum: k});
		this.loadGigs(k);
		// alert(`next click {this.id}`);
	}

	handleClick=(e) => {
  	// console.log(e.target.id);
  	const data = JSON.parse(e.target.id);
  	data.uid = this.state.user._id;
  	console.log(data);
  	// this.state.user_id = uid
  	API.saveGig(data)
  	.then().catch(err => console.log(err));
  }

	render(){
		if(this.state.requestFailed)return <p>Failed!</p>
		if(!this.state.reverbnationData)return <p>Loading...</p>	
		return(
			<Wrapper>

				<p style={{textAlign:"center",color:"white", fontSize:"200px",fontFamily:"Chalkduster", backgroundImage:"url(" + Background + ")",backgroundRepeat: "no-repeat center center fixed"}}>Gigs</p>

				{this.state.reverbnationData.results.map(obj => {
					return (

						<div className="row" key={obj.id} id={obj.id} style={{ borderBottom: '2px solid grey'}}>
							<br />

							<div className="col-sm-6">
								<img style={{ width: '200px'}} alt='' src={obj.image}/>
								<h4>{obj.headline}</h4>
								<h4>Type: {obj.type}</h4>
								
							</div>

							<div className="col-sm-6">
							<h3>{obj.name}</h3>
								
								{
									obj.location == null ? <div>No specified location</div> :
										<div>
										<h4>{obj.location.city} {obj.location.state}, {obj.location.country}</h4>
										</div>
								}
								<h4>Starts: {obj.event_start_on}</h4>
								<h4>End: {obj.event_end_on}</h4>
								{/*<button className= "btn btn-info"><a href={obj.submission_url} style={{color:"white"}}>Apply here</a></button>*/}
								<div>
									<button className= "btn btn-info"><a href={obj.submission_url} style={{color:"white"}}>Apply here</a></button>									&nbsp;
									<button className="btn btn-info save" id={JSON.stringify(obj)} onClick={this.handleClick}>Save</button>
								</div>
								<h4>Submission Cost:{obj.submission_cost}</h4>
								<br />
							</div>
						</div>
					);
				}) 
				} {/*end of this.state.reverbnation*/}
				<br />
				<div style={{textAlign:"center"}}>
					<button className="btn btn-info" onClick={this.previousClick}>Previous</button>
					&nbsp;
					<button className="btn btn-info" onClick={this.nextClick}>Next</button>
				</div>
			</Wrapper>
		)
	}
}

export default Reverbnation;