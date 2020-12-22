// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  delay = (event) => {
    event.persist();
    // event.persist() should be called when using React synthetic events inside an asynchronous callback function
    // persist() on the synthetic event removes the event 
    // from the pool allowing references to the event to be retained asynchronously. 
    return setTimeout(() => {this.props.onDelayedClick(event);}, this.props.delay);
  }
  render() {
    return <button onClick={this.delay}></button>
  }
}


// In the components/DelayedButton.js file, create a DelayedButton React component

// This component takes two props: onDelayedClick (a function), and delay (a number).

// Create a button that, when clicked, will pass the click event to the 
//onDelayedClick prop within a setTimeout(). The setTimeout() should be set to this.props.delay.

// If successful, the event will be logged to the console once the timeout has finished.

// Hint: If you having trouble with this feature, remember event pooling in React.
// By the time the setTimeout fires, the event object will have already
// been returned to the pool. So how can we fix that?


// <DelayedButton />
// ✓ should have one button
// 1) should call the callback prop after the delay
// 2) should pass the event to the callback prop
