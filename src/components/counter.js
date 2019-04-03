import React, { Component } from 'react';

class Counter extends Component {
	render() {
		//console.log('props', this.props);

		return (
			<div className="container pt-5">
				{ this.props.children }
				
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
				
				<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
				
				<button onClick={() => this.props.onDelete(this.props.counter.id)}className="btn btn-danger btn-sm m-2">Delete</button>
			</div>
		);
	}

	// Get badge classes 
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? 'warning' : 'info';
		return classes;
	};

	// Check the value of the value property
	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value; 
	};
}

export default Counter;