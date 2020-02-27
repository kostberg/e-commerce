import React, { Component } from 'react';
import Header from './components/statics/Header'
import MainApp from './components/MainApp'
import 'animate.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { BrowserRouter as Router} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <ReactNotification />
          <Header />
          <MainApp />
        </Router>
      </div>
    );
  }
}

export default App;
