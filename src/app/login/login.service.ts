import { User } from './login';
import { delay, take, tap } from "rxjs/operators";

import { environment } from '../../environments/environment';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

private readonly API =  `${environment.API}users`;
  private readonly API_AUTH =  `${environment.API}users/auth`;
  private readonly API_CREATE =  `${environment.API}users/create`;

  constructor( private http: HttpClient) { }

  // list() {
  //   return this.http.get<User[]>(this.API)
  //     .pipe(
  //       delay(2000),
  //       tap(console.log)
  //     );
  // }

  auth(usere) {
    return this.http.post(this.API_AUTH, usere).pipe(take(1));
  }

  create(user) {
    return this.http.post(this.API_CREATE, user).pipe(take(1));
  }


}
