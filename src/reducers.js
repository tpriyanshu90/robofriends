import { CHANGE_SEARCH_FIELD, GET_ROBOTS } from './constants.js';
const initalState = {
	searchField: '',
	robots: []
}
//Reduers get executed first of they are connected to App.

export const searchRobots = (state = initalState, action = {}) => {
	console.log("------in reducers-------",action.type);
	switch(action.type) {
		case CHANGE_SEARCH_FIELD: 
			return Object.assign({}, state, { searchField: action.payload });
		case GET_ROBOTS:
			return Object.assign({}, state, { robots : action.payload });	
		default: 
			return state;
	}
}