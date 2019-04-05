import React, { Component } from 'react';

class Counter extends Component {
	render() {
		//console.log('props', this.props);
		return (
			<div className="container pt-5">
				{ this.props.children }
				
				<span className={ this.getBadgeClasses() }>{ this.formatCount() }</span>


				<button 
					className="btn btn-secondary btn-sm"
					onClick={() => this.props.onIncrement(this.props.counter)}>+</button>
				
				<button 
					className="btn btn-secondary btn-sm m-2"
					onClick={() => this.props.onDecrement(this.props.counter)}
					disabled={this.props.counter.value === 0 ? 'disabled' : ''}>-</button>

				<button 
					className="btn btn-danger btn-sm"
					onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
			</div>
		);
	}

	// Get badge classes 
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? 'warning' : 'info';
		return classes;
	};

	// Check the value 
	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value; 
	};
}

export default Counter;