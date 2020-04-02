// your Bomb code here!
import React from 'react'

export default class Bomb extends React.Component {
  constructor (props) {
    super()

    console.log(props)
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render () {
    return (
      <div>
        {this.state.secondsLeft === 0
        ? <div>Boom!</div>
        : <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        }
      </div>
    )
  }
}