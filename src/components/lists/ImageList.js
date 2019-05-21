import React from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

import ImageCard from '../materials/ImageCard';

const styles = {
}

class ImageList extends React.Component{
	renderList(){
		return this.props.photo_list.map((photo,i) => {
			return (
				<Grid key={i} item xs={12} sm={6} md={3} lg={3}>
					<ImageCard photo={photo}/>
				</Grid>
			)
		})
	}

	render(){

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

export default withStyles(styles)(ImageList);