import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { version } from 'punycode';



@Component({
  selector: 'app-api-version',
  templateUrl: './api-version.component.html',
  styleUrls: ['./api-version.component.css']
})
export class ApiVersionComponent implements OnInit {
  aboutUrl = 'https://v1.api.isogeo.com/about';
  version : any;
  jsonObject: any;

  constructor(private http: HttpClient) { }
  
  showVersion() {
   
    this.http.get<Version>(this.aboutUrl)
      .subscribe(resp => this.version = { resp });
      console.log('la rep:'+ this.version)
            
  }
  


  ngOnInit() {
    this.showVersion();
  }

}

export interface Version{
  textApi: string;
}
