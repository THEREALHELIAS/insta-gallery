import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

import photoReducer from './photoReducer';

export default combineReducers({
	photos:photoReducer

});