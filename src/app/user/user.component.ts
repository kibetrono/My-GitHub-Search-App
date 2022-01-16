import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public myGitName = 'segem001';
  public githubUser!: string;
    public users!:any;
  user: any;

  username: string = 'segem001'
    
  constructor(private myService:SearchService) { }

  findUser () {
    this.myService.UpdateUser(this.username);
    this.myService.getUser().subscribe((user:any) => {
      console.log(user);
      this.user = user;
    });

  }



  ngOnInit(): void {

  
  }


}
