import React from 'react';
import Auth from '../utils/Auth';
import Wrapper from './Wrapper';
import Title from './Title';


class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
  
      <Wrapper>
        <Title></Title>
        <h1>Band Manager</h1>
        <h3>This is the home page.</h3>
          {Auth.isUserAuthenticated() ? (
            <div style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</div>
          ) : (
            <div style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</div>
          )}
      </Wrapper>
    )
  }
};

export default HomePage;
