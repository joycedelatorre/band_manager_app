import React, { Component } from "react";
import Background from "../components/Background/image/image.jpg";
import Jumbotron  from "../components/Jumbotron";
import { Row, Container } from "../components/Grid";
// import { Col, Row, Container } from "../components/Grid";

const sectionStyle ={
	width: "100%",
	height:"100%",
	backgroundImage:"url(" + Background + ")",
	backgroundRepeat:"no-repeat center center fixed",
	backgroundSize:"cover",
	position:"absolute"
}

class Page2 extends Component{
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
								<h3>Page 2</h3>
								<p>Stuff & etcetera</p>
							</Row>
						</Jumbotron>
					</Row>
				</Container>
      		</section>
		)
	}

}

export { Page2 };