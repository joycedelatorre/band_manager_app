import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Jumbotron  from "./Jumbotron";
import { Row, Container } from "./Grid";
import { Input, FormBtn } from "./Form";

const HelpWanted = ({
	onSubmit,
  onChange,
  artist,
  description,
  contact,
  location,
  response
}) => (
	<Container fluid>
    <Row>
      <Jumbotron>
        <Row>
          <form action ='/HelpWanted' onSubmit={onSubmit}>
            <h2>Help Wanted</h2>

            <Input
              placeholder="Artist"
              name="artist"
              // errorText={errors.artist}
              onChange={onChange}
              value={artist}
            />
            <Input
              placeholder="Description"
              name="description"
              // errorText={errors.description}
              onChange={onChange}
              value={description}
            />
            <Input
              placeholder="Contact Information"
              name="contact"
              // errorText={errors.contact}
              onChange={onChange}
              value={contact}
            />
            <Input
              placeholder="Location"
              name="location"
              // errorText={errors.location}
              onChange={onChange}
              value={location}
            />

            <FormBtn primary="true">
              Create New Listing
            </FormBtn>

            {
              response &&
                <div>
                  <h4>{response.response}</h4>
                  <h6>{response.artist}</h6>
                  <h6>{response.description}</h6>
                  <h6>{response.contact}</h6>
                  <h6>{response.location}</h6>
                </div>
            }

            <p><Link to={'/'}>Return home</Link></p>

          </form>
	      </Row>
      </Jumbotron>
    </Row>
  </Container>
);

HelpWanted.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  artist: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  response: PropTypes.object.isRequired
};

export default HelpWanted;