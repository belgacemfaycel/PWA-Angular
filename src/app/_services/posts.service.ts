import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { APIS } from './../_helpers/api';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  // GET
  getPosts() {
    return this.http.get(`${environment.apiUrl}` + APIS.POSTS.ALL, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    });
  }
  // GET
  searchPosts(text) {
    return this.http.get(`${environment.apiUrl}` + APIS.POSTS.SEARCH + text, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    });
  }
}
