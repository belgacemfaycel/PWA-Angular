import { Injectable } from '@angular/core';
import { APIS } from './../_helpers/api';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { LoginResponse } from './../_shared/models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public currentUserSubject: BehaviorSubject<string>;
  public currentUser: Observable<string>;
  constructor(
    private router: Router,
    private http: HttpClient) {
    // console.log(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('currentUser'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  // Login web service
  login(params) {
    return this.http.post(`${environment.apiUrl}` + APIS.AUTHENTICATION.LOGIN, JSON.stringify(params), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    });
  }

  // register web service
  register(params) {
    return this.http.post(`${environment.apiUrl}` + APIS.AUTHENTICATION.REGISTER, JSON.stringify(params), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    });
  }

  // return info of the current users
  public get currentUserValue(): string {
    return this.currentUserSubject.value;
  }

  public refreshCurrentUserValue() {
    this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
  }

  _Logout() {
    // After clearing localStorage redirect to login screen
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

  }
}
