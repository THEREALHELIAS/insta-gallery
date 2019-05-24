import React from 'react';

import Grid from '@material-ui/core/Grid';

import GenericImageCard from '../materials/GenericImageCard';

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';

import {
	removeFromPersonalList
} from '../../actions'

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

	renderActions = (id) => {
		return (
			<Button onClick={() => this.props.removeFromPersonalList(id)} color="secondary">
				Remove from list
			</Button>
		)
	}

	renderList(){
		return this.props.existingPhotos.map((photo,i) => {
			return (
				<Grid key={i} item xs={12} sm={6} md={3} lg={3}>
					<GenericImageCard 
						title={this.renderTitle(photo.user.name)}
						image={photo.urls.full} 
						content={this.renderContent(photo)}
						actions={this.renderActions(photo.id)}
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


export default connect(null,{removeFromPersonalList})(PersonalImageList);