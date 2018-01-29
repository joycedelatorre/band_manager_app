import React from 'react';
import PropTypes from 'prop-types';
// import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData, user }) => (
  <div className="container">
    <h1>Dashboard</h1>
    <h3>You should get access to this page only after authentication.</h3>
  	{secretData && <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</div>}
  </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
