import React, { Component } from 'react';

import DC from '../assets/digitalcrafts.png';
import User from './User';
import { COHORT } from '../datasets';

export default class App extends Component {
	render() {
		const list = COHORT.sort((a, b) => {
			if (a.toLowerCase() < b.toLowerCase()) return -1;
			if (a.toLowerCase() > b.toLowerCase()) return 1;
			return 0;
		}).map((name, i) => <User name={name} key={i} />);

		return (
			<div className="App">
				<h1 style={{ textAlign: 'center' }}>
					<img src={DC} alt="DigitalCrafts logo" style={{ width: '5rem' }} />
					Novemebr 2017 Cohort
				</h1>
				<ul>{list}</ul>
			</div>
		);
	}
}
