import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../../../providers/display/display.service';
import { HttpClient } from '@angular/common/http';

let token = sessionStorage.getItem("token");
console.log('Your on home with this : ' + token)


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  ngOnInit() {}
  constructor() {}
 
  
 
}



