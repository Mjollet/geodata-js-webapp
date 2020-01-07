import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { tap, catchError, mergeMap, finalize } from 'rxjs/operators';
import { AuthService } from './../../app/providers/auth-token/auth.service';

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService) { }


    // Add authozization token to the request

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authToken = this.authService.getToken();
        

        if (authToken !== null) {
            req = req.clone({
                setHeaders: {
                    'content-type': 'application/json',
                    'Authorization': btoa("Bearer " + authToken)
                }
            });
        }
        return next.handle(req);
    }


}

