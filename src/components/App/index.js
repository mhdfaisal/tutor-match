import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../../pages/Home';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route path='/' component={Home} exact />
			</Switch>
		</Router>
	);
};
export default App;
