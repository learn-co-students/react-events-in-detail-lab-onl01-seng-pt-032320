import React, { Component } from 'react';

class DelayedButton extends Component {

    constructor(props) {
        super(props);
    }
    
    
    render() {
        let callback = (event) => {
            event.persist();
            window.setTimeout(() => {
              this.props.onDelayedClick(event);
            }, this.props.delay);
          };
        return (
            <div>
                <button 
                onClick = {callback}
                />
            </div>
        );
    }
}

export default DelayedButton;