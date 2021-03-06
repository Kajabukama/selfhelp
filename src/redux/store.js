import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux';

import thunk from 'redux-thunk';

import userReducers from './reducers/user.reducers';
import dataReducers from './reducers/data.reducers';
import uiReducers from './reducers/ui.reducers';

const initialState = {};
const middleware = [thunk];

const reducers = combineReducers({
  user: userReducers,
  data: dataReducers,
  UI: uiReducers
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;