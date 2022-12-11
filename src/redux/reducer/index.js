import { combineReducers } from "redux";

import airlineReducer from "./airline";
import bookingReducer from "./booking";
import flightReducer from "./flight";
import userReducer from "./user";

const rootReducer = combineReducers({
  airline: airlineReducer,
  booking: bookingReducer,
  user: userReducer,
  flight: flightReducer,
});
export default rootReducer;
