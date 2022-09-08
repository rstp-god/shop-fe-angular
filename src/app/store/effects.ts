import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {emptyAction, loadUser, loadUserId, setJWT, setUser, setUserId} from './actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {UserService} from '../services/user.service';
import {LoginBody, User} from '../common/interfaces/user';
import {EMPTY} from 'rxjs';
import {LoginService} from '../services/login.service';
import {Router} from '@angular/router';

@Injectable()
export class Effects {

  loadUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUser),
      switchMap((payload: { id: number }) => this.userService.getUserInfo(payload.id).pipe(
        map((response: User) => setUser({user: response})),
        catchError((err) => EMPTY),
      )),
    );
  });

  loadUserId$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserId),
      switchMap(() => this.loginService.getAuthInfo().pipe(
        map((response: { id: number }) => {
          setUserId({id: response.id});
          return loadUser({id: response.id});
        }),
        catchError((err) => EMPTY),
      ))
    );
  });

  loadJWTKey$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(setJWT),
      switchMap((payload: { info: LoginBody }) => this.loginService.getAuthKey(payload.info).pipe(
        map((response: { accessToken: string }) => {
          document.cookie = `jwt = ${response.accessToken}`;
          this.router.navigate(['/']);
          return loadUserId();
        })
      ))
    );
  });


  constructor(
    private actions$: Actions,
    private userService: UserService,
    private loginService: LoginService,
    private router: Router,
  ) {
  }
}
