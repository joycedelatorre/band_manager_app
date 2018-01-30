import React, { Component } from "react";
import Background from "../components/Background/image/image.jpg";
import Jumbotron  from "../components/Jumbotron";
import { Row, Container } from "../components/Grid";
// import { Col, Row, Container } from "../components/Grid";


// Page2 displays How To Section
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
								<h3>How To</h3>
								<p>1) Create an Account <br /> <br />
								   2) Input Youtube Account Information <br /> <br />
								   3) Locate Fans <br /> <br />
								   4) Create Help Wanted/Seeking Band <br /> <br />
								</p>
							</Row>
						</Jumbotron>
					</Row>
				</Container>
      		</section>
		)
	}

}

export { Page2 };