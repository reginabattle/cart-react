import React, { Component} from 'react';
import Counter from './counter';

class Counters extends Component {
	state = {
		counters: [
			{id: 1, value: 4},
			{id: 2, value: 0},
			{id: 3, value: 0},
			{id: 4, value: 0},
		]
	}

	handleIncrement = counter => {
		const counters = [...this.state.counters];// Clone counters array
		const index = counters.indexOf(counter);
		counters[index] = {...counter} // Clone counter object (agrument recieved)
		counters[index].value++;
		this.setState({ counters })
	}

	handleReset = () => {
		// Loop through counters and set value to 0
		const counters = this.state.counters.map(c => {
			 c.value = 0;
			 return c;
		})
		this.setState({ counters });
	}

	handleDelete = (counterId) => {
		console.log(`Product #${counterId} deleted. `);

		// Get all counters except the one with the passed Id
		const counters = this.state.counters.filter( c => c.id !== counterId);

		// Update counters state with new array
		this.setState({ counters: counters });
	}

	render() {
		return (
			<div>
				<div className="container pt-5">
					<button className="btn btn-primary btn-sm" onClick={this.handleReset}>Reset</button>
				</div>

				{ this.state.counters.map(counter => (
					<Counter key={counter.id} onDelete={this.handleDelete} onIncrement={this.handleIncrement} counter={counter}>
						<h4>Product #{counter.id}</h4>
					</Counter>
				))}
			</div>
		)
	}
}

export default Counters;