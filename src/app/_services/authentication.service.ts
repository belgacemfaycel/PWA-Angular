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
  public currentUserSubject: BehaviorSubject<LoginResponse>;
  public currentUser: Observable<LoginResponse>;
  constructor(
    private router: Router,
    private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoginResponse>(JSON.parse(localStorage.getItem('currentUser')));
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
  public get currentUserValue(): LoginResponse {
    return this.currentUserSubject.value;
  }

  public refreshCurrentUserValue() {
    this.currentUserSubject.next(JSON.parse(localStorage.getItem('currentUser')));
  }

  _Logout(url, returnUrl) {
    // After clearing localStorage redirect to login screen
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate([url ? url : '/authentication'], { queryParams: { returnUrl } });
  }
}
