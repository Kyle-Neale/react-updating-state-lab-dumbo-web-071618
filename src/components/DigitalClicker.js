// Code DigitalClicker Component Here
import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class DigitalClicker extends Component {

  constructor() {
    super()
    this.state = {
      timesClicked:  0
    }
  }

  handleClick = (event) => {
    this.setState((prevState) => {
      return {
        timesClicked: ++prevState.timesClicked
      }
    })
  }

  render() {
    return (
      <button onClick={this.handleClick}>
      {this.state.timesClicked}
      </button>
    )
  }
}
