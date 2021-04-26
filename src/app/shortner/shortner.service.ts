import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from "rxjs/operators";
import { Shortner } from './shortner'

@Injectable({
  providedIn: 'root'
})
export class ShortnerService {

  private readonly API = 'http://localhost:3000/shortner/new'

constructor(private http: HttpClient) { }

  create(url) {
    return this.http.post(this.API, url).pipe(take(1))
  }

}
