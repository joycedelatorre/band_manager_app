import React from 'react';
import Auth from '../utils/Auth';
import Dashboard from '../components/Dashboard.jsx';


class DashboardPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: '',
      user: {}
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    // set the authorization HTTP header
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        
        // console.log(xhr.response.user);
          // here's the output . . .
          // {
          //   _id: "5a6f9367a79ba51bd4bf79e0",
          //   username: "matt",
          //   password: "$2a$10$AYX/BOkOai.DjKq5Fq9VWedjBpzjMX9IpRUAyGcX7pFdeMjspqw8u",
          //   __v: 0
          // }
        //
        
        this.setState({
          secretData: xhr.response.message,
          user: xhr.response.user
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return (<Dashboard secretData={this.state.secretData} user={this.state.user} />);
  }

}

export default DashboardPage;
