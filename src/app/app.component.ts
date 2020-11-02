import { Component, OnInit } from '@angular/core';
import { NewsletterService } from './_services/newsletter.service';
import { SwPush } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  readonly VAPID_PUBLIC_KEY = 'BMs5BkLftBIYqjL4r99k0u6cM3L8eMZFZrIolitBeyUP8y87EBO6Ob9L_qAUJLQofTqyRveWAeZq2vzftrSMHBo';
  constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) {

  }
  ngOnInit() {
    this.subscribeToNotifications();
  }
  subscribeToNotifications() {
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => {
        console.log(sub);
        this.newsletterService.addPushSubscriber(sub).subscribe();
      }
      )
      .catch(err => console.error('Could not subscribe to notifications', err));
  }

}


