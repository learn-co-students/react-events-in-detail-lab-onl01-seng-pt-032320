// Code DelayedButton Component Here

import React, { Component } from 'react';

class DelayedButtons extends Component {
    
    handleClick = (event) => {
        event.persist()

        window.setTimeout( () => { 

          this.props.onDelayedClick(event)}         //props within setTimeout
          ,                                         // comma separates props
            this.props.delay)                       
      }
     
    render() { 
        return ( 
            <button onClick={this.handleClick}>Delay</button>
         )
    }
}
 
export default DelayedButtons;