import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Tools from './pages/Tools';
import Demos from './pages/Demos';
import { unregister as unregisterServiceWorker } from './registerServiceWorker';

const Root = () => (
	<Router basename="/reactivemaps">
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/learn" component={Learn} />
			<Route exact path="/tools" component={Tools} />
			<Route exact path="/demos" component={Demos} />
		</Switch>
	</Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
unregisterServiceWorker();
