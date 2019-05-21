import {combineReducers} from 'redux';
// import { reducer as formReducer } from 'redux-form';

import photoReducer from './photoReducer';

import appReducer from './appReducer';

export default combineReducers({
	photos:photoReducer,
	sideBar: appReducer
});