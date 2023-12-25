import React, { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super();
    this.state = {
      countValue: 0,
    };
  }
  
  incrementCounter() {
    console.log("Qwerty")
  }

  render() {
    return (
      <>
        <div>
          Counter {this.state.countValue}
        </div>
        <button onClick={this.incrementCounter}>+</button>
        <button>-</button>
      </>
    )
  }
}
