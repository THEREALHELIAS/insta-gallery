import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import ImageCard from '../materials/ImageCard';

class ImageList extends React.Component{

	renderList(){
		return this.props.photo_list.map((photo,i) => {
			return (
				<Grid key={i} item xs={3}>
					<ImageCard photo={photo}/>
				</Grid>
			)
		})
	}

	render(){
		console.log(this.props.photo_list)
		return(
			<div>
				<Grid container spacing={24}>
					{this.renderList()}
				</Grid>
			</div>
		)
	}
}

ImageList.propTypes ={
	classes: PropTypes.object.isRequired
};

export default withStyles(null)(ImageList);