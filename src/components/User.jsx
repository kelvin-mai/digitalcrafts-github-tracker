import React, { Component } from 'react';

export default class User extends Component {
	constructor(props) {
		super(props);
		this.state = { user: undefined };
	}

	componentDidMount() {
		fetch(`https://api.github.com/users/${this.props.name}`)
			.then(res => res.json())
			.then(user => this.setState({ user }));
	}

	render() {
		const { name } = this.props;
		const { user } = this.state;
		return (
			<div className="container">
				<div className="User">
					<div className="User-card">
						{user && <img src={user.avatar_url} alt={user.login} />}
						{user && <h3 className="User-header">{user.login}</h3>}
					</div>
					<div className="User-info">
						<img
							src={`http://ghchart.rshah.org/${name}`}
							alt={`${name}'s Github chart`}
						/>
						{user && <p>{user.bio}</p>}
					</div>
				</div>
			</div>
		);
	}
}
