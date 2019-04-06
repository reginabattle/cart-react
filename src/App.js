import React, { Component } from 'react';
import Nav from './components/nav';
import Counters from './components/counters';
import Footer from './components/footer';

class App extends Component {
	state = {
		counters: [
			{id: 1, value: 4},
			{id: 2, value: 0},
			{id: 3, value: 0},
			{id: 4, value: 0},
		]
	}

	handleIncrement = counter => {
		// Clone counters array
		const counters = [...this.state.counters];

		// Get counter
		const index = counters.indexOf(counter);

		// Clone counter object (agrument recieved)
		counters[index] = {...counter} 
		counters[index].value++;
		this.setState({ counters })
	}

	handleDecrement = counter => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = {...counter}
		counters[index].value--;
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
			<React.Fragment>
				<Nav totalCounters={this.state.counters.filter(c => c.value > 0).length} />
				<main className="container">
					<Counters 
						counters={this.state.counters} 
						onReset={this.handleReset} 
						onIncrement={this.handleIncrement} 
						onDecrement={this.handleDecrement}
						onDelete={this.handleDelete} />
				</main>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;