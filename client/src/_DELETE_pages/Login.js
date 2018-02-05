import React, { Component } from "react";
import Background from "../components/Background/image/image.jpg";
import Jumbotron  from "../components/Jumbotron";
import { Row, Container } from "../components/Grid";
// import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";
// import { Input, TextArea, FormBtn } from "../components/Form";

import API from "../utils/API";

const sectionStyle ={
	width: "100%",
	height:"100%",
	backgroundImage:"url(" + Background + ")",
	backgroundRepeat:"no-repeat center center fixed",
	backgroundSize:"cover",
	position:"absolute"
}

class Login extends Component{
	
	state = {
		username: "",
		password: "",
		message: "",
		success: false
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.username && this.state.password) {
			API.login({
				username: this.state.username,
				password: this.state.password
			})
				.then(res => this.handleLoginResult())
				.catch(err => console.log(err));
		}
	};

	handleLoginResult = res => {
		console.log("handleLoginResult", res.message);
		this.setState({ message: res.message });
		this.setState({ success: res.success });
	};

	render(){
		return (
			<section style={ sectionStyle }>
			<Container fluid >
			<Row style={{fontSize:50, color:"black"}}><h1>Band Manager</h1>
				<Jumbotron>
					<Row>
						<form>
							<h3>Login</h3>
							<Input
								value={this.state.username}
								onChange={this.handleInputChange}
								name="username"
								placeholder="Username"
							/>
							<Input
								value={this.state.password}
								onChange={this.handleInputChange}
								name="password"
								placeholder="Password"
							/>
							<FormBtn
								disabled={!(this.state.username && this.state.password)}
								onClick={this.handleFormSubmit}
              				>
                				Submit
              				</FormBtn>
						</form>
					</Row>
					<Row>
						<h4>{ this.state.message }</h4>
						<h5>Logged in: { this.state.success.toString() }</h5>
					</Row>

				</Jumbotron>
				</Row>
			</Container>
      </section>
		)
	}

}

export { Login };