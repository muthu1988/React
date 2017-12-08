import { createReducer } from 'redux-act';
import * as HomeAction from '../actions/home';

export default createReducer({
  [HomeAction.setReduxState]: (state, action) => {
    const newState = Object.assign({}, state, action);
    return newState;
  },
}, {});