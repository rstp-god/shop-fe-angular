import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  constructor() { }

  // custom func to slice jwt key from cookies
  getJWTkey(): string {
    let i = document.cookie.indexOf('jwt'); // find index
    let accKey = document.cookie.slice(i); // slice everythink that before jwt =
    accKey = accKey.slice(4); // slice jwt
    i = accKey.indexOf(';'); // find ; space for next cookie
    if (i === -1) { // if jwt key is alone cookie or last in cookie list
      return accKey = 'Bearer ' + accKey;
    }
    accKey = 'Bearer ' + accKey.slice(0, i); // slice everyrhink after ;
    return accKey;
  }
}
