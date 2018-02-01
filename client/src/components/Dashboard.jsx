import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import { Gapi } from './Gapi';



const Dashboard = ({ secretData, user }) => (
<div>
  <Wrapper>
    <h1>Dashboard</h1>
    
    <h3>You should get access to this page only after authentication.</h3>
  	{secretData && <div style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.username}</strong>!<br />{secretData}</div>}
  	<Gapi></Gapi>

  </Wrapper>
 </div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
