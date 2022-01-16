import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repositories:any
  username:string="segem001"

  constructor(private myService:SearchService) { }

  ngOnInit(): void {
  }


  findUser () {
    
    this.myService.UpdateUserRepo(this.username);

    this.myService.getUserRepositories().subscribe((userRepo:any) => {
      console.log(userRepo);
      
      this.repositories = userRepo;
    });

  }

}
