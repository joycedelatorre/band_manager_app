import React, { Component } from "react";
import Background from "../components/Background/image/image.jpg";
import Jumbotron  from "../components/Jumbotron";
import { Row, Container } from "../components/Grid";
// import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

const sectionStyle ={
	width: "100%",
	height:"100%",
	backgroundImage:"url(" + Background + ")",
	backgroundRepeat:"no-repeat center center fixed",
	backgroundSize:"cover",
	position:"absolute"
}

class Page1 extends Component{
	state = {
		message: ""
	};

	componentDidMount() {
		this.getMessage();
	}

	getMessage = () => {
		API.getMsg()
			.then(res => this.setState({ message: res.data }))
			.catch(err => console.log(err));
	};


	render() {
		return (
			<section style={ sectionStyle }>
				<Container fluid >
					<Row style={{fontSize:50, color:"black"}}><h1>Band Manager</h1>
						<Jumbotron>
							<Row>
								<h3>Page 1</h3>
								<p>Stuff & etcetera</p>
								<p>{ this.state.message }</p>
							</Row>
						</Jumbotron>
					</Row>
				</Container>
      		</section>
		)
	}

}

export { Page1 };