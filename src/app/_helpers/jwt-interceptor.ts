
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from './../_services/authentication.service';
// import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'Application/json',
            }
        });
        // add authorization header with jwt token if available
        // const currentUser = this.authenticationService.currentUserValue;
        // if (currentUser && currentUser.accessToken) {
        //     request = request.clone({
        //         setHeaders: {
        //             Authorization: `Bearer ${currentUser.accessToken}`,
        //         }
        //     });
        // }

        return next.handle(request);
    }
}

