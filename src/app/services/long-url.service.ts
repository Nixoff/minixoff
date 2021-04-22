import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LongUrlService {

  API = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<any[]>(`${this.API}`);
  }
}
