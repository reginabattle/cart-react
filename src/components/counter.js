import React, { Component } from 'react';

class Counter extends Component {
	// Set inital state
	state = {
		value: this.props.value
	};

	// Methods
	handleIncrement = () => {
		this.setState({ value: this.state.value + 1 });
	};

	handleDecrement = () => {
		this.setState({ value: this.state.value - 1 });
	};

	render() {
		//console.log('props', this.props);

		return (
			<div className="container pt-5">
				{ this.props.children }
				<button onClick={this.handleDecrement} className="btn btn-secondary btn-sm">-</button>
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>
				<button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">+</button>
				<button onClick={this.props.onDelete} className="btn btn-danger btn-sm m-2">Delete</button>
			</div>
		);
	}

	// Get badge classes 
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.value === 0 ? 'warning' : 'info';
		return classes;
	};

	// Check the value of the value property
	formatCount() {
		const { value } = this.state;
		return value === 0 ? 'Zero' : value; 
	};

}

export default Counter;