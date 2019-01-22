import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        items: ["handbag", "shoes"]
    };

    styles = {
        fontSize: 30
    };

    render() { 

       return (
        <div>
           <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
           <button className="btm btn-secondary btn-sm">+</button>
           <ul>{this.state.items.map(item => <li key={item}>{ item }</li>)}</ul>
        </div>
       );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {count} = this.state
        return (count === 0 ? "Zero" : count);
    }
}
 
export default Counter;