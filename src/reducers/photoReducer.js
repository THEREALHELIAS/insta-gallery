// import _ from 'lodash';

import {
	SEARCH_PHOTOS,
	MODAL_PHOTO_OPEN,
	MODAL_PHOTO_CLOSE,
	ERROR_STATUS
} from '../actions/types';
 
const initialState = {
	photo_list: [],
	isOpen: false,
	single_photo:null,
	existing_photos: null,
	error_status: null
}

export default (state = initialState, action) => {
	console.log(action)
	switch(action.type){
		case SEARCH_PHOTOS:
			return {...state, photo_list: action.payload};
		case MODAL_PHOTO_OPEN:
			console.log(action.payload)
			return {...state, isOpen: true, single_photo: action.payload}
		case MODAL_PHOTO_CLOSE:
			return {...state, isOpen: false}
		case ERROR_STATUS:
			return {...state, error_status: action.payload}
		default:
			return state;
	}
}