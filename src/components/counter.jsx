import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    };

    styles = {
        fontSize: 30
    };

    render() { 
       return (
        <React.Fragment>
           <span style={this.styles} className="badge badge-primary m-2">{this.state.count}</span>
           <button className="btm btn-secondary btn-sm">+</button>
        </React.Fragment>
       );
    }
}
 
export default Counter;