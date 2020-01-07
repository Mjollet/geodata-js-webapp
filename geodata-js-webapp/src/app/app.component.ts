import { Component } from '@angular/core';
import {MatDialog } from '@angular/material';
import {ApiVersionComponent} from './views/components/api-version/api-version/api-version.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularjs-webapp';

  constructor( public dialog: MatDialog){}

  openDialog(){
    this.dialog.open(ApiVersionComponent);
    
  }



}
