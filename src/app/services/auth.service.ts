import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(uname: string, pname: string) {
    if (uname === 'Leon' && pname === '1234') {
      return 200;
    } else {
      return 403;
    }
  }
}
