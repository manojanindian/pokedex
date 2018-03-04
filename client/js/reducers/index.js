import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pokemon from './pokemon-reducer';

export default combineReducers({
	pokemon,
	routing: routerReducer,
});
