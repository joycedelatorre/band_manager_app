import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Jumbotron  from "./Jumbotron";
import { Row, Container } from "./Grid";
import { Input, FormBtn } from "./Form";

const HelpWanted = ({
	onSubmit,
	onChange,
	errors
}) => (
	<Container fluid>
    <Row>
      <Jumbotron>
        <Row>
		<h1>Help Wanted</h1>

		<form action ='/HelpWanted' onSubmit={onSubmit}>
		<Input
              placeholder="Artist"
              name="artist"
              // errorText={errors.artist}
              onChange={onChange}
              value={this.artist}
            />
        <Input
              placeholder="Description"
              name="description"
              // errorText={errors.description}
              onChange={onChange}
              value={this.description}
            />
        <Input
              placeholder="Contact Information"
              name="contact"
              // errorText={errors.contact}
              onChange={onChange}
              value={this.contact}
            />
        <Input
              placeholder="Location"
              name="location"
              // errorText={errors.location}
              onChange={onChange}
              value={this.location}
            />
		<FormBtn primary ="true">
		Create New Listing
		</FormBtn>
    </form>
	</Row>
      </Jumbotron>
    </Row>
  </Container>
);

HelpWanted.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default HelpWanted;