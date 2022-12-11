const initialState = {
	flight: [],
	isLoading: false,
	isError: false,
};

const flightReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_FLIGHT_PENDING":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "GET_FLIGHT_REJECTED":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case "GET_FLIGHT_FULFILLED":
			return {
				...state,
				isLoading: false,
				isError: false,
				flight: action.payload.data.data,
			};
		case "GET_FIND_FLIGHT_PENDING":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "GET_FIND_FLIGHT_REJECTED":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case "GET_FIND_FLIGHT_FULFILLED":
			return {
				...state,
				isLoading: false,
				isError: false,
			};
		case "GET_DETAIL_FLIGHT_PENDING":
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case "GET_DETAIL_FLIGHT_REJECTED":
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		case "GET_DETAIL_FLIGHT_FULFILLED":
			return {
				...state,
				isLoading: false,
				isError: false,
			};
		case "RESET_FLIGHT":
			return {
				...state,
				isLoading: false,
				isError: false,
				flight: [],
			}
		default:
			return state;
	}
};

export default flightReducer;
