import React, {Component} from 'react'
import Hammer from 'hammerjs'
import logo from './logo.svg'

function init() {
  //
  let figura = document.querySelector('img')
  let hammer = new Hammer(figura)

  hammer.on('press', (e) => {
    e.target.classList.toggle('expand')
    console.log("You are pressing Logo");
    console.log(e);
  })
  console.log(figura);
}

export default class Logo extends Component {

   constructor(props) {
     super(props)
     this.name = ""
   }

  render() {

    return (
      <header className="App-header">

        <p>{this.props.name}</p>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    )

  }

}
