import React, { Component } from 'react';

class Counter extends Component {
	// Set inital state
	state = {
		count: 0,
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	}

	handleDecrement = () => {
		this.setState({ count: this.state.count -1 });
	}

	render() {
		return (
			<div className="container pt-5">
				<button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">Decrement</button>
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
				<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
			</div>
		);
	}

	// Get badge classes 
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? 'warning' : 'info';
		return classes;
	}

	// Check the value of the count property
	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count; 
	}

}

export default Counter;