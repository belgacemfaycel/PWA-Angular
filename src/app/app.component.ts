import { Component } from '@angular/core';
import { NewsletterService } from './_services/newsletter.service';
import { SwPush } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly VAPID_PUBLIC_KEY = 'BIuGZJc5_8n-fkhEDYNYiIFwyH0Bin-yHSCQbMOXSRtGlx0RzA6Sx1H9ko1afIbc7PldIxoZ3UQXDpoN_c90M7w';
  constructor(
    private swPush: SwPush,
    private newsletterService: NewsletterService) {
    this.subscribeToNotifications();
  }

  subscribeToNotifications() {
    console.log('here');
    this.swPush.requestSubscription({
      serverPublicKey: this.VAPID_PUBLIC_KEY
    })
      .then(sub => this.newsletterService.addPushSubscriber(sub).subscribe())
      .catch(err => console.error('Could not subscribe to notifications', err));
  }

}


