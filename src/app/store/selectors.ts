import {createSelector} from '@ngrx/store';
import {State} from './initialState';

export interface AppState {
  mainReducer: State;
}

const reducer = (state: AppState) => state.mainReducer;

export const selectUser = createSelector(reducer, (state: State) => state.user);
export const selectName = createSelector(reducer, (state: State) => state.user.firstName);
