import { CHANGE_SEARCH_FIELD, GET_ROBOTS } from './constants.js';
export const setSearchField = (text) => {
	console.log(text);	
	return ({
		type: CHANGE_SEARCH_FIELD,
		payload: text
	});
}

export const getRobotsArr = (robotsArr) => {
	console.log("---in robots action");
	return ({
		type: GET_ROBOTS,
		payload: robotsArr
	});
}