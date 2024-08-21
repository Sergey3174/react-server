import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { todosReducer, optionReducer } from './reducers';
import { thunk } from 'redux-thunk';

const reducer = combineReducers({
	todosState: todosReducer,
	optionState: optionReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
