import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        items: ["handbag", "shoes"]
    };

    styles = {
        fontSize: 30
    };

    handleIncrement = item => {
        console.log(item);
        this.setState({ count: this.state.count + 1 })
    }

    render() { 

       return (
           
        <div>
           <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
           <button onClick={ () => this.handleIncrement(item) } className="btm btn-secondary btn-sm">+</button>
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