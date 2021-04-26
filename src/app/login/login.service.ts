import { User } from './login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:3000/users'

constructor(private http: HttpClient) { }

list() {
  return this.http.get<User[]>(this.API);
}

}
