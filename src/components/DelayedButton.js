// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends React.Component{
    
    constructor(){
        super()
    }


        onClick = (event) => {
            event.persist();
            setTimeout(() => {
              this.props.onDelayedClick(event);
            }, this.props.delay);
          }
    

    render(){
        return(
            <button onClick={this.onClick}></button>
        )
    }

}

{/* <CoordinatesButton />
    ✓ should have one button
    ✓ should call the callback prop when the button is clicked
    ✓ should pass the right coordinates to the callback prop

  <DelayedButton />
    ✓ should have one button
    ✓ should call the callback prop after the delay (54ms)
    ✓ should pass the event to the callback prop (52ms) */}
