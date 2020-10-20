import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private router: Router,
    public authentificationService: AuthenticationService) { }

  ngOnInit() {
  }
  logout() {
    this.router.navigate(['/public/authentication']);
    this.authentificationService._Logout();

  }
}
