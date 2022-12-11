const initialState = {
  user: {},
  isLoading: false,
  isError: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
      return { ...state, isLoading: true };
    case "LOGIN_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.data.token.data,
      };
    case "LOGIN_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "REGISTER_PENDING":
      return { ...state, isLoading: true };
    case "REGISTER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "GET_USER_PENDING":
      return { ...state, isLoading: true };
    case "GET_USER_FULFILLED":
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: action.payload.data.data,
      };
    case "GET_USER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "UPDATE_USER_PENDING":
      return { ...state, isLoading: true, isError: false };
    case "UPDATE_USER_FULFILLED":
      if(action.payload.data.status === "success"){
        alert("update success")
        return {
          ...state,
          isLoading: false,
          isError: false,
          user: action.payload.data.data,
        };
      }else{
        alert("error: " + action.payload.data.error)
        return {
          ...state,
          isLoading: false,
          isError: false,
        }
      }
    case "UPDATE_USER_REJECTED":
      return { ...state, isLoading: false, isError: true };
    case "RESET_USER":
      return {
        ...state,
        isLoading: false,
        isError: false,
        user: [],
      }
    default:
      return state;
  }
};

export default userReducer;
