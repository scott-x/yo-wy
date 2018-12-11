import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as DetailReducer } from '../pages/detail/store';

const reducer = combineReducers({
	header: headerReducer,
	detail:DetailReducer
});

export default reducer;