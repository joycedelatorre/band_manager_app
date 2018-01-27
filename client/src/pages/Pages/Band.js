import React, { Component } from "react";
import Background from "../../components/Background/image/image.jpg";
import Jumbotron  from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";

import API from "../../../../controllers/bandsController";

const sectionStyle ={
  width: "100%",
  height:"100%",
  backgroundImage:"url(" + Background + ")",
  backgroundRepeat:"no-repeat center center fixed",
  backgroundSize:"cover",
  position:"absolute"
}

class BandInfo extends Component {
  state = {
    band: {}
  };

  // componentDidMount() {
  //   API.getBand(this.props.match.params.id)
  //     .then(res => this.setState({ band: res.data }))
  //     .catch(err => console.log(err));
  // }

  componentDidMount() {
    API.findById(this.props.match.params.id)
      .then(res => this.setState({ band: res.data }))
      .catch(err => console.log(err));
  }

  render(){
    return (
      <section style={ sectionStyle }>
        <Container fluid >
          <Row style={{fontSize:50, color:"black"}}><h1>Band Info</h1>
            <Jumbotron>
              <Row>
                <h3>{this.state.band.name}</h3>
                <p>{this.state.band.info}</p>
                {/*<p>{this.state.band.etc}</p>*/}
              </Row>
            </Jumbotron>
          </Row>
          <Row>
            <Col size="md-2">
              <Link to="/">← Back to Main</Link>
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default BandInfo;
