import React from 'react';
import Auth from '../utils/Auth';
import Test from '../components/Test.jsx';


class TestPage extends React.Component {

  state = {
    args: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/test');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        let args = [];
        for (let i = 0; i < xhr.response.length; i++) {
          args.push(xhr.response[i]);
        }
        this.setState({
          args: args
        });
      }
    });
    xhr.send();
  }

  render() {
    return (
      this.state.args
        ? <Test>{this.state.args}</Test>
        : <div>Nothing to show</div>
      );
  }

}

export default TestPage;
