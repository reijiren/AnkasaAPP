import "./App.css";
import Router from "./router/index";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import {store, persistor} from './redux/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
