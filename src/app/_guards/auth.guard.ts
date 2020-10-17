import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from './../_services/authentication.service';
// import {SharedService} from '../_services/shared.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    // private  sharedService: SharedService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.currentUserValue;
    if (currentUser && currentUser.accessToken) {
      // logged in so return true
      return true;
    } else if (state.url.includes('shared-goals?token=')) {
      // this.sharedService.changeReturnUrl(state.url);
      // return this.router.createUrlTree(['/public/find-out-more'], { queryParams: { returnUrl: state.url } });
    } else {
      // not logged in so redirect to login page with the return url
      // const returnUrl = state.url.includes('returnUrl') ? state.url.substr(state.url.indexOf('returnUrl') + 10, state.url.length)
      // : state.url;
      this.router.navigate(['/public'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}
