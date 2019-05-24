import React from 'react';

import Grid from '@material-ui/core/Grid';

import GenericImageCard from '../materials/GenericImageCard';

import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';


class PersonalImageList extends React.Component{

	renderTitle = (title) => {
		return (
			<Typography variant="subtitle1">
				{title}
			</Typography>

		)
	}

	renderContent = (image) => {
		return (
			<Typography>
				{image.description}
			</Typography>
		)
	}

	renderList(){
		console.log(this.props)
		return this.props.existingPhotos.map((photo,i) => {
			return (
				<Grid key={i} item xs={12} sm={6} md={3} lg={3}>
					<GenericImageCard 
						title={this.renderTitle(photo.user.name)}
						image={photo.urls.full} 
						content={this.renderContent(photo)}
						actions={null}
					/>					
				</Grid>
			)
		})
	}

	render(){
		return (
			<Grid container spacing={24}>
				{this.renderList()}
			</Grid>
		)
	}	
}


export default connect(null,{})(PersonalImageList);