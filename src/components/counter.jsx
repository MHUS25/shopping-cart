import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        items: ["handbag", "shoes"]
    };

    styles = {
        fontSize: 30
    };


    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    
    handleIncrement() {
        console.log(this);
    }

    render() { 

       return (
           
        <div>
           <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
           <button onClick={this.handleIncrement} className="btm btn-secondary btn-sm">+</button>
           { this.renderItems() }
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

    renderItems() {
        if (this.state.items.length === 0) return <p>Basket is empty</p>;  
        return <ul>{this.state.items.map(item => <li key={item}>{ item }</li>)}</ul>;
    }
}
 
export default Counter;