import React from 'react';
import Auth from '../utils/Auth';
import Reverbnation from '../components/reverbnation.jsx';


class GigsPage extends React.Component {

  state = {
    args: []
  }


  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/reverbnation');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        let args = [];
        let jsonResponse = xhr.responseJSON;  
        for (let i = 0; i < jsonResponse; i++) {
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
        ? <Reverbnation pnum='1'></Reverbnation>
        : <div>Nothing to show</div>
      );
  }

}

export default GigsPage;
