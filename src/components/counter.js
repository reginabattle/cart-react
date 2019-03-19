import React, { Component } from 'react';

class Counter extends Component {

	// Set inital state - contains data the component needs
	state = {
		count: 0,
	};

	handleIncrement() {
		console.log('Increment clicked');
	}

	render() {
		return (
			<div className="container pt-5">
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