import React, { Component } from 'react'
import Increment from './Increment';

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      countValue: 0,
    };
  }
  
  incrementCounter() {
    console.log("Qwerty")
    this.setState (
      {
        countValue: this.state.countValue + 1
      }
    )
  };

  decrementCounter() {
    if (this.state.countValue > 0) {
      this.setState({
        countValue: this.state.countValue - 1
      });
    }  
  };

  render() {
    return (
      <>
        {/* <div>
          Counter {this.state.countValue}
        </div> */}
        <Increment countValue={this.state.countValue } />
        <button onClick={this.incrementCounter.bind(this)}>+</button>
        <button onClick={this.decrementCounter.bind(this)}>-</button>
      </>
    )
  };
}
