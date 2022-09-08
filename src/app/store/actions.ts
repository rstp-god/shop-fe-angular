import {createAction, props} from '@ngrx/store';
import {LoginBody, User} from '../common/interfaces/user';


export const loadUser = createAction('[User] LoadUser', props<{id: number}>());
export const setUser = createAction('[User] SetUser', props<{user: User}>());
export const setUserId = createAction('[User] Set Id', props<{id: number}>());
export const loadUserId = createAction('[User] LoadId');
export const setJWT = createAction('[User] Set JWT', props<{info: LoginBody}>());
export const restore = createAction('[User] Restore');
export const emptyAction = createAction('Empty Action');
