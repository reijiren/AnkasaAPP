const initialState = {
  booking: [],
  isLoading: false,
  isError: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL_BOOKING_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "GET_DETAIL_BOOKING_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "GET_DETAIL_BOOKING_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        booking: action.payload.data.data,
      };
    case "ADD_BOOKING_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case "GET_MY_BOOKING_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "ADD_BOOKING_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "GET_MY_BOOKING_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case "ADD_BOOKING_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case "GET_MY_BOOKING_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        booking: action.payload.data.data,
      };
    case "RESET_BOOKING":
			return {
				...state,
				isLoading: false,
				isError: false,
				booking: [],
			}
    default:
      return state;
  }
};

export default bookingReducer;
