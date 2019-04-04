import React, { Component} from 'react';
import Counter from './counter';

class Counters extends Component {
	render() {
		return (
			<div>
				<div className="container pt-5">
					<button className="btn btn-primary btn-sm" onClick={this.props.onReset}>Reset</button>
				</div>

				{ this.props.counters.map(counter => (
					<Counter key={counter.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={counter}>
						<h4>Product #{counter.id}</h4>
					</Counter>
				))}
			</div>
		)
	}
}

export default Counters;