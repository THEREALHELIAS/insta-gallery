import React from 'react'; 

import 'typeface-roboto';

import { Router, Route, Switch } from 'react-router-dom';

import history from '../history';

import EntryPage from './pages/EntryPage';

import MainUser from './MainUser';

import { withStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';


const styles = {
	root: {
		flexGrow:1,
		padding: 20
  	}
}

const App = (props) => {
	const { classes} = props	

	return (
		<div className={classes.root}>
			<Router history={history}>
				<Switch>
					<Route path='/user' component={MainUser}/>
					<Route path='/entry' component={EntryPage}/>
				</Switch>
			</Router>
		</div>
	)
}

App.propTypes ={
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);