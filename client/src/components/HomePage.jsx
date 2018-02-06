import React from 'react';
import Auth from '../utils/Auth';
import Wrapper from './Wrapper';
import Title from './Title';
// import H_Title from "../containers/H_Title.jsx";



class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      <Wrapper>
      
        
        <Title></Title>
        <h3>Manage your band with online marketing tools with Band Manager.</h3>
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
