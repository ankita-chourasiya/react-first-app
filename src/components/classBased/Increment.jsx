import React, { Component } from 'react'

export default class Increment extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    console.log("ComponentDidMount Increment")
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate Increment")
  }

  componentWillUnmount() {
    console.log("ComponentDidUpdate Unmount")
  }

  render() {
    return (
      <div>
        Counter {this.props.countValue}
      </div>
    )
  }
}
