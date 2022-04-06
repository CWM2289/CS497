import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import reduxThunk from 'redux-thunk';
import authorizationReducer from '../reducers/authorizationReducer';
import productTourReducer from '../reducers/productTourReducer';

/**
 * Helps in combining reducers while creating a redux store
 * @param {*} accessToken the access token
 * @returns {Object} redux store
 */
export default (accessToken) => {
  const initialState = {
    accessToken,
  };
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    combineReducers({
      accessToken: authorizationReducer,
      productTour: productTourReducer,
      // firstState: firstReducer,
      // secondState: secondReducer
    }),
    initialState,
    composeEnhancers(applyMiddleware(reduxThunk)),
  );

  return store;
};
