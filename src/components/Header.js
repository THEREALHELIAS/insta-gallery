import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';

import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';

import { sideBarOpen } from '../actions';

import { connect } from 'react-redux';

const styles={
	header_style:{
		background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
		color: 'white',
		// borderRadius: 100,
		marginTop: 0
	},
	grow:{
		flexGrow: 1
	}
};

class Header extends React.Component{

	openDrawer = () => {
		this.props.sideBarOpen()
	}

	render(){
		const { classes } = this.props
		return (
			<div>
				<AppBar className={classes.header_style} position="fixed" >
					<Toolbar>
						<Typography className={classes.grow} variant="body2" color="inherit">
							Surf Ya Photos!
						</Typography>
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={() => this.openDrawer()}
			            >
		              		<MenuIcon />
	            		</IconButton>
					</Toolbar>
				</AppBar>
			</div>
		)
	}
}

Header.propTypes ={
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(connect(null,{sideBarOpen})(Header));
