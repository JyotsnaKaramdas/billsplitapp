import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Tracker from './tracker'; 




class App extends Component {
  render() {
    return(
      <div classname= "App">
       
        <Navbar />
        <div classname= "container my-5">
          <Tracker />

        </div>

     </div>
    );
  }
}
  
 export default App;
