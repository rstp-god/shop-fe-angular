import {createReducer, on} from '@ngrx/store';
import {initialState} from './initialState';
import {restore, setUser} from './actions';

export const mainReducer = createReducer(initialState,
  on(setUser, (state, action) => ({...state , user: action.user})),
  on(restore, () => ({...initialState}))
);

