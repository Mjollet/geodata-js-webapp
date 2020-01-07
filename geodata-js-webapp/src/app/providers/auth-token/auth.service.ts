import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


const authUrl = environment.AUTH_URL;
const client = {
  id: environment.CLIENT_ID,
  secret: environment.CLIENT_SECRET,
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  ngOnInit() { }

  constructor(private httpclient: HttpClient) { }   

  
  createToken(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + btoa(client.id + ':' + client.secret),
        'Content-Type': 'application/x-www-form-urlencoded',
      }) 
    }

    let params = new HttpParams()
    params = params.append('grant_type', 'client_credentials')


    return this.httpclient.post<any>(authUrl + '/oauth/token', params, httpOptions).
      pipe(
        // Map only the access_token
        map((data: any) => {
          data = data.access_token
          return data;
        }),
        tap(data => this.setToken(data)),
        catchError(error => {
          return throwError('Something went wrong!');
        })
      )
  } 

  setToken(data) {
    sessionStorage.setItem('access_token', data.access_token)
  }

  getToken() {
    sessionStorage.getItem('access_token');
  }

  isLoggedIn(): boolean {
    let authToken = sessionStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  // doLogout() {
  //   let removeToken = sessionStorage.removeItem('access_token');
  //   if (removeToken == null) {
  //     this.router.navigate(['log-in']);
  //   }
  // }

}


