import { Injectable, Input } from '@angular/core';
//Enable dynamic request
import { Observable, throwError } from 'rxjs';
import { catchError, tap  } from 'rxjs/operators';
// Import HttpHeaders
import { HttpClient } from '@angular/common/http';
// Import AuthService
import { environment } from '../../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  
  constructor( private httpclient: HttpClient) {} 
  

  getShares(): Observable <any> { 
    return this.httpclient.get<any>( 'https://v1.api.isogeo.com' + '/shares'
  ) 
    .pipe(
      tap(res => console.log(res))
    )
  }
}



