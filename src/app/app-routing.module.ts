import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'home',component:HomepageComponent},
  {path:'user',component:UserComponent},
  {path:'repo',component:RepoComponent}, 
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
