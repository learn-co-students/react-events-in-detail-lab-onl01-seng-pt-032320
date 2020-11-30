import React, { Component } from 'react';

export default class DelayedButton extends Component {

    delay = (event) => {
        event.persist()
        window.setTimeout(this.props.onDelayedClick(event), this.props.delay)
    }
   
    render() {
        return (
        <button
            onClick={this.delay}
        />
        )
    }
}