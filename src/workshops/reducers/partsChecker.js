
import * as initialStates from '../constants/InitialStates';
import * as actionTypes from "../constants/ActionTypes";

function getFormattedRecentData(data) {
	let location = window.location.pathname;
	const dataStored = localStorage.getItem('recentSearches') && JSON.parse(localStorage.getItem('recentSearches')) || [];
	console.log("databrand", data)
	if( data && data.brand ) {

		const dataToSend = {
			brand: data.brand,
			partInfo: location.includes('dashboard') ? data.partNumber : data.vehicleInfo.oe_numbers,
			date: new Date(),
			vin: data.vin,
			isPartNumberFound: data.isPartNumberFound,
			isOENumberValid: data.isOENumberValid
		}
		dataStored.unshift(dataToSend);
		localStorage.setItem('recentSearches', JSON.stringify(dataStored))
		localStorage.setItem('location', JSON.stringify(window.location.pathname));
		return dataStored;

	} else {
		return dataStored;
	}
}


export default function login(state = initialStates.PARTS_CHECKER_INITIAL_STATE, action) {

	switch (action.type) {
		case actionTypes.UPDATE_INPUT_INFO:
			const { name, value } = action.data
			return {
				...state,
				[name]: value
			}

		case actionTypes.START_FETCHING_FOR_PARTS:
			return {
				...state,
				isFetchingParts: true,
				resultantData: {}
			};

		case actionTypes.UPDATE_RECENT_SEARCH_HISTORY:
			return {
				...state,
				recentSearchHistory: action.data
			};

		case actionTypes.UPDATE_CHECKER_DATA:
			console.log("actiondata", action.data)
			return {
				...state,
				isFetchingParts: false,
				resultantData: action.data,
				recentSearchHistory: getFormattedRecentData(action.data)
			};

		default:
			return state;
	}
}