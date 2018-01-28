import React, { Component } from 'react';
import './App.css';
import Login from './pages/Login';
import User from './pages/User';


class App extends Component {
  // state ={
  //   text:"anumore ther"
  // };
  // sayHello = () => {
  //   axios.get('/api/hello').then((data)=>{
  //     this.setState({text:data})
  //   });
  // }
  render() {
    return (
      <div className="App">
      {/*<Login />*/}
      <User />
       {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title" >React</h1>
        </header>
         <p className="App-intro">
           To get started, edit <code>src/App.js</code> and save to reload.
         </p>*/}
      </div>
    );
  }
}

export default App;
