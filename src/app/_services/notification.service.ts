import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { APIS } from './../_helpers/api';



@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private http: HttpClient) { }
  // GET
  getNotifications() {
    return this.http.get(`${environment.apiUrl}` + APIS.NOTIFICATIONS.ALL, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    });
  }
}
