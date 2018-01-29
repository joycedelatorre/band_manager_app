import React from 'react';
// import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../utils/Auth';

class HomePage extends React.Component {

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
  }

  render() {
    return (
      // <Card className="container">
      //   <CardTitle title="React Application" subtitle="This is the home page." />
      //     {Auth.isUserAuthenticated() ? (
      //       <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
      //     ) : (
      //       <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
      //     )}
      // </Card>
      <div className="container">
        <h1>Band Manager</h1>
        <h3>This is the home page.</h3>
          {Auth.isUserAuthenticated() ? (
            <div style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</div>
          ) : (
            <div style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</div>
          )}
      </div>
    )
  }
};

export default HomePage;
