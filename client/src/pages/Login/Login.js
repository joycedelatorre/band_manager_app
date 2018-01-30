import React, { Component } from "react";
import Background from "../../components/Background/image/image.jpg";
import Jumbotron  from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Nav } from "../../components/Nav";
import { Animetest } from "../../components/Animetest";


const sectionStyle ={
	width: "100%",
	height:"100%",
	backgroundImage:"url(" + Background + ")",
	backgroundRepeat:"no-repeat center center fixed",
	backgroundSize:"cover",
	position:"absolute"
}

class Login extends Component{
	state ={
		username:"",
		password:""
	};

	render(){
		return (
			<section style={ sectionStyle }>
			<Nav></Nav>
			
			<Container fluid >
			<Row style={{fontSize:50, color:"black"}}>
			<Animetest></Animetest>
			
				<Jumbotron>
					<Row>
						<form>
							<h3>Login</h3>
							<Input placeholder="Username"/>
							<Input placeholder="Password"/>
							<FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
						</form>
					</Row>
					{/*<section style={ sectionStyle }> hello
      </section>*/}

				</Jumbotron>
				</Row>
			</Container>
      </section>
		)
	}

}

export default Login;