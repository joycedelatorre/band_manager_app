import React from 'react';
import Auth from '../utils/Auth';
import HelpWanted from '../components/HelpWanted.jsx';


class  HelpWantedPage extends React.Component {


  state = {
    args: []
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/helpwanted');
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
        ? <HelpWanted>{this.state.args}</HelpWanted>
        : <div>Nothing to show</div>
      );
  }

}

export default HelpWantedPage;
