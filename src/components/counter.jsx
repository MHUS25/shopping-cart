import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    styles = {
        fontSize: 30
    };

    render() { 

        let classes = "badge m-2 badge-";

        classes += this.state.count === 0 ? "warning" : "primary";

       return (
        <React.Fragment>
           <span style={this.styles} className={classes}>{this.state.count}</span>
           <button className="btm btn-secondary btn-sm">+</button>
        </React.Fragment>
       );
    }
}
 
export default Counter;