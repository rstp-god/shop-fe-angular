import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {combineLatest, Observable, of, pipe} from 'rxjs';
import {Response, User, UserBody} from '../common/interfaces/user';
import {catchError, filter, map, switchMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUserInfo(id: number): Observable<User> {
    return this.http.get<User>(`https://api.sundancex.ru/users/${id}`);
  }

  public createUser(body: UserBody): Observable<Response | {}> {
    return this.validateUser(body.phone).pipe(
      switchMap((value: boolean) => {
        if (value) {
          return this.http.post<Response>(`https://api.sundancex.ru/users`, body);
        }
        return of({});
      }),
    );
  }

  public validateUser(phone: string): Observable<boolean> {
    return this.http.get<User[]>(`https://api.sundancex.ru/users?phone=${phone}`).pipe(
      map(value => value.length === 0),
      catchError((err) => {
        console.error(err);
        return of(true);
      })
    );
  }
}
