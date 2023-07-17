// import logo from './logo.svg';
// import './App.css';
import React from 'react'

//make class component
//make constructor in class component


class App extends React.Component{
  constructor(){
    super();
    //state make before html by using this.state
    this.state={
      data:'Hrishi'

    }
    console.warn('constructor') // constructor made when class made as soon as
  }
  render()
  {
    console.warn('render')    // then render works
    return(
      <h1>Hello::{this.state.data}</h1>//data return from this.state
    )
  }
}
export default App;
