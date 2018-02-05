import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Spotify from "../containers/Spotify.jsx";
import Listener from "../containers/Listener.jsx";
import Twitter from "../containers/Twitter.jsx";


const Dashboard = ({ secretData, user }) => (
  <Wrapper>
    <h1>Dashboard</h1>
    <h3>You should get access to this page only after authentication.</h3>
  	{secretData && <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.username}</strong>!<br />{secretData}</div>}
  	 <Listener username="imagine dragons"></Listener>
    {/* {user && <Spotify username={`${user.username}`}></Spotify>} */}
    {user.username && <Spotify username={user.username} />}
  	<Twitter username="imagine dragons"></Twitter>
  </Wrapper>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
