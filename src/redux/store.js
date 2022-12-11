import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducer/index";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

// persist storage
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = applyMiddleware(logger, promiseMiddleware, thunk);
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
