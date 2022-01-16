import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Repository } from '../repository';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  
  fetchrrr!:any;
    fetched!: string;
    r = false;

  constructor(private myService:SearchService) { }

  ngOnInit(): void {   
  }

  @ViewChild('formInputs') searchRepoForm!: NgForm;

  Rep() {
    this.fetched = this.searchRepoForm.value.search;
    
    this.myService.findSearchRep(this.fetched).then((response:any) => {
        this.fetchrrr = this.myService.srepoos;
        this.r = true;
      }
    );

    }

}
