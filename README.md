
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }
```

Next, let's update our `span` element to display `sum`.

```js
  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number"></input>
        <input className="inputLine" type="number"></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

Next, let's update our `input` elements to handle user input

```js
  updateNumber1(val) {
    this.setState({ number1: parseInt(val, 10) });
  }

  updateNumber2(val) {
    this.setState({ number2: parseInt(val, 10) });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton"> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

Finally, let's update our `button` element to update the value of `sum`.

```js
  add(num1, num2) {

  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4> Sum </h4>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
        <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.add(this.state.number1, this.state.number2) }> Add </button>
        <span className="resultsBox"> Sum: {this.state.sum} </span>
      </div>
    )
  }
```

How you solve the toy problem is up to you, if you can't figure it out check out the solution section.

</details>

### Solution

<details>

<summary> <code> Sum.js </code> </summary>

```js

```

</details>

<br />

<img src="https://github.com/DevMountain/react-1-afternoon/blob/solution/readme/5g.gif" />

## Black Diamond

To take this project a step further try to add more toy problems to the project throughout your time at DevMountain. This is completely optional, however this project has the potential to be a `showcase` of your knowledge to solve CS problems.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>


