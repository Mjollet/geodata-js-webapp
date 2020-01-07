import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  

  constructor(private httpclient: HttpClient) {}

  getAll(): Observable<Metadata[]> {
    return this.httpclient.get<Metadata[]>('assets/data/output.json')
    .pipe(
      tap(data => console.log(data)),    
      catchError(this.handleError<Metadata[]>('getAll', []))
    )
    ;
  }

   /* GET metadata whose name contains search q */
  //  filter(q: string): Observable<any> {
  //   if (!q || q === '*') {
  //     q = '';
  //   } else {
  //     q = q.toLowerCase();
  //   }
  //   return this.getAll().pipe(map(data => data.filter(item => JSON.stringify(item).toLowerCase().includes(q))))
  // }
 


  get(title: string) {
    return this.getAll().pipe(map(all => {
      if (localStorage['metadata' + title]) {
        return JSON.parse(localStorage['metadata' + title]);
      }
      return all.find(e => e.title === title);
    })
    );
  }

  save(metadata: Metadata) {
    localStorage['metadata' + metadata.title] = JSON.stringify(metadata);
  }



   /**
   * Handle Http operation that failed.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

export class Metadata {
  
  _id: number;
  title: string;
  type: string;
  abstract: string;
  _creator: Creator;

  constructor(obj?: any) {
    this._id = obj && Number(obj._id) || null;
    this.title = obj && obj.title || null;
    this.type = obj && obj.type || null;
    this._creator= obj && obj._creator || null;
  }
}


export class Creator {

  _created: string ; 
  _id: string ; 
  _modified: string ; 
  _tag: string ;
  abstract: string;
  contact: Contact ;

  constructor(obj?: any) {
    this._created = obj && obj._created || null;
    this._id = obj && obj._id || null;
    this._modified = obj && obj._modified || null;
    this._tag = obj && obj._tag || null;
  }
}


export class Contact {
  _id: string;
  _tag: string ;
  addressLine1: string ;
  city: string ; 
  email: string ;
  name: string ;
  phone: number ;
 

  constructor(obj?: any) {
    this._id = obj && obj._id || null;
    this._tag = obj && obj._tag || null;
    this.addressLine1 = obj && obj.addressLine1 || null;
    this.city = obj && obj.city || null;
    this.email = obj && obj.email || null;
    this.name = obj && obj.name || null;
    this.phone = obj && Number(obj.phone) || null;
  }

}