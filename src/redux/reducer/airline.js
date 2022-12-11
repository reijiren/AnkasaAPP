const initialState = {
  airline: [],
  isLoading: false,
  isError: false,
};

const airlineReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INSERT_AIRLINES_PENDING":
			return { ...state, isLoading: true };
		case "INSERT_AIRLINES_FULFILLED":
			return {
				...state,
				isLoading: false,
				isError: false,
			};
		case "INSERT_AIRLINES_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "GET_SEARCH_AIRLINES_PENDING":
			return { ...state, isLoading: true };
		case "GET_SEARCH_AIRLINES_FULFILLED":
			return {
				...state,
				isLoading: false,
				isError: false,
				airline: action.payload.data.data,
			};
		case "GET_SEARCH_AIRLINES_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "FIND_AIRLINES_PENDING":
			return { ...state, isLoading: true };
		case "FIND_AIRLINES_FULFILLED":
			return {
				...state,
				isLoading: false,
				isError: false,
				airline: action.payload.data.data,
			};
		case "FIND_AIRLINES_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "DELETE_AIRLINES_PENDING":
			return { ...state, isLoading: true };
		case "DELETE_AIRLINES_FULFILLED":
			return {
				...state,
				isLoading: false,
				isError: false,
			};
		case "DELETE_AIRLINES_REJECTED":
			return { ...state, isLoading: false, isError: true };
		case "GET_DETAIL_AIRLINE_PENDING":
		return {
			...state,
			isLoading: true,
			isError: false,
		};
		case "GET_DETAIL_AIRLINE_REJECTED":
		return {
			...state,
			isLoading: false,
			isError: true,
		};
		case "GET_DETAIL_AIRLINE_FULFILLED":
		return {
			...state,
			isLoading: false,
			isError: false,
			airline: action.payload.data.data,
		};
		case "RESET_AIRLINE":
		return {
			...state,
			isLoading: false,
			isError: false,
			airline: [],
		}
			default:
				return state;
	}
};

export default airlineReducer;
