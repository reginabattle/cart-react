import React from 'react';

const Nav = ({ totalCounters }) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
			  <a className="navbar-brand" href="/">
			  	Cart{" "}
			  	<span className="badge badge-pill badge-secondary">{totalCounters}</span>
			  </a>
			</div>
		</nav>
	);
}

export default Nav;