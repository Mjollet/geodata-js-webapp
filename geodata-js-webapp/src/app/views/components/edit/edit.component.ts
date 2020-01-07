import { Component, OnInit, Input} from '@angular/core';
import { SearchService, Metadata, Creator, Contact } from './../../../providers/search/search.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
 metadata: Metadata;
 editTitle: string;
 editId: number;
 editCreator: Creator;
 editContact: Contact;
 title: string;
 sub: Subscription;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private searchService: SearchService) {}

  ngOnInit() {
    this.getSelect();
  }

  getSelect(): void {    

    this.sub = this.route.params.subscribe(params => {
      const title=  params['title']; // (+) converts string 'id' to a number
      this.searchService.get(title).subscribe(metadata=> {
        if (metadata) {
          this.editTitle = metadata.title;
          this.editId = metadata._id;
          this.editCreator = metadata._creator;
          this.editContact = metadata._creator.contact;
          this.metadata = metadata;
        } else {
          this.backtoList();
        }
      });
    });
  }

  
  cancel() {
    this.router.navigate(['/search']);
  }

  save() {
    this.metadata.title = this.editTitle;
    this.metadata._id = this.editId;    
    this.metadata._creator = this.editCreator;
    this.searchService.save(this.metadata);
    this.backtoList();
  }

  backtoList() {
    if (this.metadata) {
      this.router.navigate(['/search', {term: this.metadata.title} ]);
    } else {
      this.router.navigate(['/search']);
    }
  }

}
