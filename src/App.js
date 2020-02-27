import React from 'react';
import Header from './components/layout/Header'
import MainApp from './components/MainApp'
import './App.css';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component';

function App() {
  console.log(store)
  store.addNotification({
    title: "Wonderful!",
    message: "teodosii@react-notifications-component",
    type: "success",
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true
    }
  });

  return (
    <div className="App">
      <ReactNotification />
      <Header />
      <MainApp />
    </div>
  );
}

export default App;
