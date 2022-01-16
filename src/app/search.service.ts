import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  users!: User;
  githubusername:string="segem001";
  repoName!: string;
  srepoos: any;

  username!: string;

  constructor(private http:HttpClient) { 
    this.users = new User('', '', '', 0, '', new Date(), 0, 0);
  }

  
  user() {
    return this.http.get('https://api.github.com/users/' +this.githubusername +'?client_id=' +'&client_secret=' +environment.gitApi
      )
      .pipe(
        map((userresults: any) => {
        

          return userresults;
          
        })

      );
  }

//Search User
  UpdateUser(username:string) {
    this.username = username;
  }

  getUser() {
    // return this.http.get('https://api.github.com/users/' +this.githubusername +'/repos?client_id=' +environment.gitApi
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id="  + "&client_secret=" );

  }
//Search User(END)




//Search Repo

findSearchRep(rname: any) {
  let mise = new Promise<void>((resolve,) => {
    this.http.get('https://api.github.com/users/' +
    rname +'/repos?client_id='
     +environment.gitApi
      )
      .toPromise().then((response:any) => {
          this.srepoos= response;
          resolve();
        }
      );
  });
  return mise;
}
//Search Repo(END)




  fetchRepos() {
    return this.http.get('https://api.github.com/users/' +this.githubusername +'/repos?client_id=' +environment.gitApi
      )
      .pipe(
        map((reporesults: any) => {
          return reporesults;
        })
      );
  }


}
