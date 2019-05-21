import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE
} from '../actions/types';

const initialState = {
	sideBarStatus: false
}

export default (state = initialState, action) => {

	switch(action.type){
		case SIDEBAR_OPEN:
			return {...state, sideBarStatus: true};
		case SIDEBAR_CLOSE:
			console.log(action.payload)
			return {...state, sideBarStatus: false}
		default:
			return state;
	}
}