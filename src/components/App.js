import React from 'react'; 

import 'typeface-roboto';

import { Router, Route, Switch } from 'react-router-dom';

import GalleryHome from './pages/GalleryHome';

import PersonalGallery from './pages/PersonalGallery';

import history from '../history';

import Header from './Header';

import SideDrawer from './SideDrawer';

import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const styles = {
	root: {
		flexGrow:1,
		padding: 20
  	},
	container_margin_top: {
		marginTop: 70
	}
}

const App = (props) => {
	const { classes} = props	

	return (
		<div className={classes.root}>
			<Router history={history}>
				<CssBaseline/>
				<Header/>
				<div className={classes.container_margin_top}>
					<Switch>
						<Route path='/' exact component={GalleryHome}/>
						<Route path='/personal-gallery' exact component={PersonalGallery}/>
					</Switch>
				</div>
				<SideDrawer/>
			</Router>
		</div>
	)
}

App.propTypes ={
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(App);