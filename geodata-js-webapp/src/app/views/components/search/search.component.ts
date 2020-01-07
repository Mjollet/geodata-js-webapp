import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService, Metadata, Creator, Contact } from './../../../providers/search/search.service';
import { AuthService } from '../../../providers/auth-token/auth.service';
import { Observable, Subject, Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatPaginator} from '@angular/material';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
 
})
export class SearchComponent implements OnInit {
  access_token: string;
  query: string;


  displayedColumns: string[] = [ 'type', 'title', '_id'];
  expandedElement: Metadata | null;
  searchResults: Array<Metadata> = [];
  dataSource = new MatTableDataSource();
  

  // Push a search term into the observable stream.
  searchTerms = new Subject<string>();

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator
 

      constructor(private authService: AuthService, private searchService: SearchService, 
      private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.searchService.getAll().subscribe(data => {
      this.dataSource.data = data;
   }); 
    this.getinfo();     
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
   
  }

  
  //implement a search() method to call the getAll()

  applyFilter(filterValue: string){
    this.dataSource.filterPredicate = 
   (data: Metadata, filter: string) => data.title.indexOf(filter) != -1;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

   //call the api by post to identifie
   getinfo() {
    this.authService.createToken();
  }



}



