import React, { Component } from "react";
import Background from "../../components/Background/image/image.jpg";
import Jumbotron  from "../../components/Jumbotron";
import Profile_Header from "../../components/Profile_Header";
import { Col, Row, Container } from "../../components/Grid";

// Navbar.js I have commented out the file. This is no longer being used to display any information

		// Use this page to test the help wanted page
const sectionStyle ={
	width: "100%",
	height:"100%",
	backgroundImage:"url(" + Background + ")",
	backgroundRepeat:"no-repeat center center fixed",
	backgroundSize:"cover",
	position:"absolute"
}

class Page extends Component{
	state ={
		username:"",
		password:""
	};

	render(){
		return (
			<section style={ sectionStyle }>
				<Container fluid >
					<Row style={{fontSize:50, color:"black"}}><h1>Band Manager</h1>
						<Jumbotron>
							<Row>
								<h3>Page 3</h3>
								<p>Stuff & etcetera</p>
							</Row>
						</Jumbotron>
					</Row>

					{/*Can't run this section*/}
					{/*<Row>
						<Profile_Header>
						</Profile_Header>
					</Row>*/}
				</Container>
      		</section>
		)
	}

}

export default Page;