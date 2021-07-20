import React, { Component } from 'react';
import Video from './Video';
import Home from './Home';
// import Time from './Time';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/:url" component={Video} />
						{/* <Route path="/Time" exact component={Time} /> */}
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App;