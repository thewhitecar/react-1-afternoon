import React, { Component } from 'react';

export default class Subtract extends Component {

  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      subtract: null
    }
  }

  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  add(num1, num2) {
    this.setState({ result: num1 - num2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Subtract </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Subtract </button>
        <span className="resultsBox"> Result: {this.state.result} </span>
      </div>
    )
  }
}