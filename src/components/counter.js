import React, { Component } from 'react';

class Counter extends Component {

	// Set inital state - contains data the component needs
	state = {
		count: 0,
	};

	render() {

		let classes = this.getBadgeClasses();

		return (
			<div className="container pt-5">
				<span className={ classes }>{ this.formatCount() }</span>
				<button className="btn btn-secondary btn-sm">Increment</button>
			</div>
		);
	}

	// Check the value of the count property
	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count; 
	}

	// Get badge classes 
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? 'warning' : 'info';
		return classes;
	}

}

export default Counter;