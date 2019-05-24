import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GENERIC_MODAL_OPEN,
	GENERIC_MODAL_CLOSE
} from '../actions/types';

const initialState = {
	sideBarStatus: false,
	genericModalStatus: false,
	modalContent: {
		modalHeader: "none",
		modalContent: "none",
		modalActions: null
	}
}

export default (state = initialState, action) => {

	switch(action.type){
		case SIDEBAR_OPEN:
			return {...state, sideBarStatus: true};
		case SIDEBAR_CLOSE:
			console.log(action.payload)
			return {...state, sideBarStatus: false}
		case GENERIC_MODAL_OPEN: 
			return {...state, modalContent: action.payload,  genericModalStatus: true}
		case GENERIC_MODAL_CLOSE:
			return {...state,  genericModalStatus: false}
		default:
			return state;
	}
}