import { Component, OnInit } from '@angular/core';
import { NotificationService } from './../../../_services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  listNotif = [];
  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(data => {
      const result: any = data;
      // tslint:disable-next-line:prefer-for-of
      for (let index = 0; index < result.length; index++) {
        const element = result[index];
        if (element.type_of_notification === 1) {
          element.notificationText = element.fullName + ' liked your post';
        }
        this.listNotif.push(element);
      }
    }, error => {

    });
  }

}
