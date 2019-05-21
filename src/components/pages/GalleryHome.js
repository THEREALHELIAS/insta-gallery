import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

import SearchField from '../materials/SearchField';

import { connect } from 'react-redux';

import { searchPhotos } from '../../actions';

import ImageList from '../lists/ImageList';

import ModalComp from '../materials/ModalComp';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    display:'flex',
    flex: 'wrap'
  },
});

class GalleryHome extends React.Component {
	onChange = (query) => {
		console.log(query);
		console.log(this.props);
		this.props.searchPhotos(query);
	}

	render(){
		console.log(this.props)
		const { classes } = this.props

		return (
		    <div>
				<Grid container spacing={24}>
					<Grid item xs={12} sm={12} md={12} lg={12}>
						<Paper className={classes.paper}>
							<SearchField onChange={this.onChange}/>
						</Paper>
					</Grid>
				</Grid>
				
				<ImageList photo_list={this.props.photos}/>
			    <ModalComp modal_status={this.props.isOpen} photo={this.props.photo}/>
		    </div>
	    )
	}
  	
}

GalleryHome.propTypes ={
	classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
	console.log(state)
	return {
		photos: state.photos.photo_list,
		isOpen: state.photos.isOpen,
		photo: state.photos.single_photo
	}
}

export default withStyles(styles)(connect(mapStateToProps,{searchPhotos})(GalleryHome));