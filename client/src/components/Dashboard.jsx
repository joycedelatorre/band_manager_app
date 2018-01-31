import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Spotify from "../containers/Spotify.jsx";

const Dashboard = ({ secretData, user }) => (
  <Wrapper>
    <h1>Dashboard</h1>
    <h3>You should get access to this page only after authentication.</h3>
  	{secretData && <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.username}</strong>!<br />{secretData}</div>}
  	<Spotify username="imagine dragons"></Spotify>
  </Wrapper>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
