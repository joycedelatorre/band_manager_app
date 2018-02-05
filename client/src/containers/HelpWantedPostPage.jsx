import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../utils/Auth';
import HelpWantedPost from '../components/HelpWantedPost.jsx';



// this help wanted is just copied from the helpwanted post page 
    // I know that we need all the same data so I dont know what needs to be changes 
class  HelpWantedPostPage extends React.Component {

  constructor(props, context) {

    super(props)
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/helpwantedpost');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        let results = [];
        console.log(xhr.response);
        for (let i = 0; i < xhr.response.length; i++) {
          results.push(xhr.response[i]);
        }
        console.log(results);
        this.setState({
          results: results
        });
      } else {
        console.log("not 200");
      }
    });
    xhr.send();
  }

  // render() {
  //   console.log("render");
  //   return (
  //     this.state.results
  //       ? <HelpWantedPost>{this.state.results}</HelpWantedPost>
  //       : <div>Nothing to show</div>
  //   );
  // }

  render() {
    return (
    <HelpWantedPost>{this.state.results}</HelpWantedPost>
    );
  }

}

HelpWantedPostPage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default HelpWantedPostPage;
