// const ReactSixteenAdapter = require("enzyme-adapter-react-16");
import React from 'react'
// your Bomb code here!
class Bomb extends React.Component{
    constructor(props){
        super()

        this.state={
            secondsLeft: props.initialCount
        }
    }

    render(){
        const sentence = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;
        return (
        <div>{sentence}</div>
        )
    }
}
export default Bomb