import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DataService } from '../../../_services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Home';
  text = '';
  constructor(private router: Router, private data: DataService) {
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
          case '/dashboard/addPost':
            this.title = 'Add post';
            break;
          default:
            break;
        }
      }
    });

  }
  addPost() {
    this.router.navigate(['/dashboard/addPost']);
  }
  ngOnInit() {
  }
  searchItem() {
    this.data.changeMessage(this.text);
  }

}
