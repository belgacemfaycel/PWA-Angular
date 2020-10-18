import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Home';
  constructor(private router: Router) {
    router.events.subscribe((val) => {
      // see also

      if (val instanceof NavigationEnd) {
        switch (val.url) {
          case '/dashboard/home':
            this.title = 'Home';
            break;
          case '/dashboard/search':
            this.title = 'Search';
            break;
          case '/dashboard/notification':
            this.title = 'Notifications';

            break;
          case '/dashboard/about':
            this.title = 'About';
            break;

          default:
            break;
        }
      }
    });

  }

  ngOnInit() {
  }

}
