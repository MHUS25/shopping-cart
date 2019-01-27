import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value
    };

    styles = {
        fontSize: 20
    };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
       return (
        <div>
          <h4>Item {this.props.id}</h4>
           <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
           <button onClick={ () => this.handleIncrement() } className="btm btn-secondary btn-sm">+</button>
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
