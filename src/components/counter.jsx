import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: this.props.value
    };

    styles = {
        fontSize: 20
    };

    handleIncrement = () => {
        this.setState({ value: this.state.value + 1 })
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
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.state
        return (value === 0 ? "Zero" : value);
    }

}

export default Counter;
