import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API = 'http://localhost:3000/users/'
  constructor(private http: HttpClient) { }

}
