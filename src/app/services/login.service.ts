import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {JwtService} from './jwt.service';
import {Observable} from 'rxjs';
import {LoginBody} from '../common/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private jwtToken: string;

  constructor(
    private http: HttpClient,
    private jwt: JwtService
  ) {}


  public getAuthInfo(): Observable<{ id: number }> {
    this.jwtToken = this.jwt.getJWTkey();
    return this.http.get<{ id: number }>('https://api.sundancex.ru/auth/info',
      {
        headers: new HttpHeaders({
          Authorization: this.jwtToken,
        })
      });
  }

  public getAuthKey(body: LoginBody): Observable<{accessToken: string}> {
    return this.http.post<{accessToken: string}>('https://api.sundancex.ru/auth/login', body)
  }
}
