import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import { withStyles } from '@material-ui/core/styles';

import Header from './Header';

import SideDrawer from './SideDrawer';

import { Route, Switch } from 'react-router-dom';

import GalleryHome from './pages/GalleryHome';

import PersonalGallery from './pages/PersonalGallery';

const styles = {
	container_margin_top: {
		marginTop: 70
	}
}

class MainUser extends React.Component{
	render(){

		const {classes} = this.props

		return(
			<React.Fragment>
				<CssBaseline/>
				<Header/>
				<div className={classes.container_margin_top}>
					<Switch>
						<Route path='/user' exact component={GalleryHome}/>
						<Route path='/user/personal-gallery' exact component={PersonalGallery}/>
					</Switch>
				</div>
				<SideDrawer/>
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(MainUser);