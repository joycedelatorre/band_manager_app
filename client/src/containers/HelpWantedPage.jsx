import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/Auth';
import HelpWanted from '../components/HelpWanted.jsx';

class  HelpWantedPage extends React.Component {

  constructor(props, context) {
    super(props, context);
  
    this.state = {
      artist: '',
      description: '',
      contact: '',
      location: '',
      response: {}
    };

    this.postForm = this.postForm.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }

  postForm(event) {
    
    event.preventDefault();

    const artist = encodeURIComponent(this.state.artist);
    const description = encodeURIComponent(this.state.description);
    const contact = encodeURIComponent(this.state.contact);
    const location = encodeURIComponent(this.state.location);

    const formData = 
      `artist=${artist}&description=${description}&contact=${contact}&location=${location}`;
    
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/api/helpwanted');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          // artist: xhr.response.artist,
          // description: xhr.response.description,
          // contact: xhr.response.contact,
          // location: xhr.response.location,
          artist: '',
          description: '',
          contact: '',
          location: '',
          response: xhr.response
        });
      }
    });
    xhr.send(formData);
  }

  changeInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {

    return (
      <HelpWanted
        onSubmit={this.postForm}
        onChange={this.changeInput}
        artist={this.state.artist}
        description={this.state.description}
        contact={this.state.contact}
        location={this.state.location}
        response={this.state.response}
      />
    );
  }

}

HelpWantedPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default HelpWantedPage;
