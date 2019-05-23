import photos from '../apis/unsplash';
import personalList from '../apis/personalList';
 
// import history from '../history';

import {
	SEARCH_PHOTOS,
	MODAL_PHOTO_OPEN,
	MODAL_PHOTO_CLOSE,
	SIDEBAR_CLOSE,
	SIDEBAR_OPEN,
	ADD_TO_PERSONAL_LIST,
	REMOVE_FROM_PERSONAL_LIST,
	FETCH_PHOTOS,
	ERROR_STATUS
} from './types';



export const searchPhotos = (query) => async dispatch => {
	const response = await photos.get('/search/photos/', {
		params: {query: query}
	});

	console.log(response);

	dispatch({
		type: SEARCH_PHOTOS,
		payload: response.data.results,
		total_pages: response.data.total_page
	});
}

export const modalPhotoOpen = (id) => async dispatch => {
	const response = await photos.get(`/photos/${id}`)
	console.log(response);
	dispatch( {
		type: MODAL_PHOTO_OPEN,
		payload: response.data
	})
}

export const modalPhotoClose = () => {
	return {
		type: MODAL_PHOTO_CLOSE
	}
}


export const sideBarOpen = () => {
	return{
		type: SIDEBAR_OPEN
	}
}

export const sideBarClose = () => {
	return{
		type: SIDEBAR_CLOSE
	}
}


export const addToPersonalList = (photo) => async dispatch => {

	await personalList.post('/personalList', {...photo})
	.then (res => {
		// console.log(res);
		dispatch({
			type: ADD_TO_PERSONAL_LIST,
			payload: res.data
		})
	})
	.catch( err =>{
		dispatch({
			type: ERROR_STATUS,
			payload: err
		})	
	});
}

export const fetchPhotos= () => async dispatch => {
	const response = await personalList.get(`/personalList`)

	dispatch({
		type: FETCH_PHOTOS,
		payload: response.data
	})
}

export const removeFromPersonalList = () => async dispatch => {
	console.log("Remove from personal list...");
}