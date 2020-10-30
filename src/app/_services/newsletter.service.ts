import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { APIS } from './../_helpers/api';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';



@Injectable()
export class NewsletterService {

  constructor(private http: HttpClient) {

  }

  addPushSubscriber(sub: any) {
    return this.http.post('/api/notifications', sub);
  }

  // send() {
  //   return this.http.post('/api/newsletter', null);
  // }
  // Login web service
  send(params) {
    console.log(params);
    return this.http.post(`${environment.apiUrl}` + APIS.NEWSLETTER.SEND, JSON.stringify(params), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      })
    });
  }
}
