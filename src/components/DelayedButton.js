import React from 'react';

class DelayedButton extends React.Component {


    render(){
        return <button onClick={(e) => setTimeout(() => {e.persist(); this.props.onDelayedClick(e, this.props.delay)})}>Delayed Button</button>
    }
}

export default DelayedButton;