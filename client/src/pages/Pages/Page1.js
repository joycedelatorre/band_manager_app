import React, { Component } from "react";
import Background from "../../components/Background/image/image.jpg";
import Jumbotron  from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";


//Displays About Section
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
								<h3>About</h3>
								<p style={{fontSize:20, color:"purple"}}>This app was create to put the power back into the hands of bands. 
								Are you a band looking to see where you fans are? Are you an upcoming Artist looking for the perfect drum? 
								Or are you just looking to see how bright your star of Fame is! 
								All of this can be answered with Band Manager.
								</p>
							</Row>
						</Jumbotron>
					</Row>
				</Container>
      		</section>
		)
	}

}

export default Page;