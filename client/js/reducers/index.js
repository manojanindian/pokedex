import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import pokemon from './pokemon-reducer';
import pokemonInfo from './pokemon-info-reducer';
import typeInfo from './type-info-reducer';

export default combineReducers({
	pokemon,
	pokemonInfo,
	typeInfo,
	routing: routerReducer,
});
