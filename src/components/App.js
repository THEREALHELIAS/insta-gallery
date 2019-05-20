import React from 'react'; 

import 'typeface-roboto';

import { Router, Route, Switch } from 'react-router-dom';

import GalleryHome from './pages/GalleryHome';

import history from '../history';

import Header from './Header';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
	container_margin_top: {
		marginTop: 80
	}
}

const App = (props) => {
	const { classes} = props	

	return (
		<div className="ui container">
			<Router history={history}>
				<Header/>
				<div className={classes.container_margin_top}>
					<Switch>
						<Route path='/' exact component={GalleryHome}/>

					</Switch>
				</div>
			</Router>
		</div>
	)
}

App.propTypes ={
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);