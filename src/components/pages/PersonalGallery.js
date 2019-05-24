import React from 'react';

import { connect } from 'react-redux';

import PersonalImageList from '../lists/PersonalImageList';

import {
	fetchPhotos
} from '../../actions'



class PersonalGallery extends React.Component{
	componentDidMount(){
		this.props.fetchPhotos()
	}

	render(){
		return(
			<div>
				<PersonalImageList existingPhotos={this.props.existingPhotos}/>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		existingPhotos: Object.values(state.existingPhotos)
	}
}

export default connect(mapStateToProps,{fetchPhotos})(PersonalGallery);