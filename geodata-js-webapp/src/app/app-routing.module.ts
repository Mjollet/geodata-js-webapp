import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/components/login/login.component';
import { HomeComponent } from './views/components/home/home.component';
import { SearchComponent } from './../app/views/components/search/search.component';
import { EditComponent } from './views/components/edit/edit.component';


const appRoutes: Routes = [ 
  {path: 'search', component: SearchComponent},
  {path: 'edit/:title', component: EditComponent},
 
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },


  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
