// your Bomb code here!
import React from 'react';
import ImageSlider from './ImageSlider'

export default class Bomb extends React.Component{
    constructor(props){
        super()
        this.state={
            secondsLeft: props.initialCount
        }
     
    }

    render(){
        return(
        <div>

            {
             this.state.secondsLeft !== 0?  <h1>{this.state.secondsLeft} seconds left before I go boom!</h1> :
             <h1>Boom!</h1>
            }
            
        </div>
        )
    }
    
}