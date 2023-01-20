import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import tasksReducer from './components/flight.reducer';

const reducer = combineReducers({
  flights: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,

  composeEnhancers(applyMiddleware(thunk)),
);

export default store;
