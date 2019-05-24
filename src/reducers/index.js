import {combineReducers} from 'redux';
// import { reducer as formReducer } from 'redux-form';

import photoReducer from './photoReducer';

import existingPhotosReducer from './existingPhotosReducer';

import appReducer from './appReducer';

export default combineReducers({
	photos: photoReducer,
	app: appReducer,
	existingPhotos: existingPhotosReducer
});