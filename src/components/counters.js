import React, { Component} from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {

		const { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;

		return (
			<div>
				<div className="container pt-5">
					<button className="btn btn-primary btn-sm" onClick={onReset}>Reset</button>
				</div>

				{counters.map(counter => (
					<Counter key={counter.id} onDelete={onDelete} onIncrement={onIncrement} onDecrement={onDecrement} counter={counter}>
						<h4>Product #{counter.id}</h4>
					</Counter>
				))}
			</div>
		)
	}
}

export default Counters;